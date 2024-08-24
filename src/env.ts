import { z } from "zod";

/**
 * サーバーサイドの環境変数スキーマ
 */
const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  MICROCMS_SERVICE_DOMAIN: z.string(),
  MICROCMS_API_KEY: z.string(),
}); 

/**
 * クライアントサイドの環境変数スキーマ
 */
const clientSchema = z.object({
  // client env vars
});

/**
 * 環境変数の取得
 */
const processEnv = {
  NODE_ENV: process.env.NODE_ENV,
  MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
  MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
};

/**
 * サーバーサイドかどうか
 */
const isServer = typeof window === "undefined";

/**
 * サーバーサイドとクライアントサイドの環境変数スキーマをマージ
 */
const mergedSchema = serverSchema.merge(clientSchema);

/**
 * 環境変数のパース
 * 
 * サーバーサイドでは全ての環境変数
 * クライアントサイドでは NEXT_PUBLIC_ で始まる環境変数が必須
 */
const parsed = isServer ? mergedSchema.safeParse(processEnv) : clientSchema.safeParse(processEnv);

/**
 * 環境変数のパースに失敗した場合
 */
if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    parsed.error.errors.map((e) => `  - ${e.message}`).join("\n"),
  );
  throw new Error("Invalid environment variables");
}

/**
 * アプリに提供される環境変数
 * クライアントサイドでは NEXT_PUBLIC_ で始まる変数のみ許可
 */
export const env = new Proxy(parsed.data as z.infer<typeof mergedSchema>, {
  get(target, prop) {
    if (typeof prop !== "string") return undefined;

    // クライアントサイトでは NEXT_PUBLIC_ で始まる変数のみ許可
    if (!isServer && !prop.startsWith("NEXT_PUBLIC_"))
      throw new Error(
        "❌ Attempted to access serverside environment variable on the client",
      );

    return target[prop as keyof typeof target];
  }
})