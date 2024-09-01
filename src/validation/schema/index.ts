import { z } from "zod";

/**
 * 検索ボックスの入力値のスキーマ
 */
export const searchInputSchema = z
  .object({
    query: z.string().min(1, { message: "キーワードを入力してください。" }),
  })
  .strict();

/**
 * ページIDのスキーマ
 */
const pageSchema = z
  .string()
  .transform((val) => {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) {
      throw new Error("Invalid integer");
    }
    return parsed;
  })
  .refine((val) => Number.isInteger(val) && val > 0, {
    message: "Page must be a positive integer",
  });

/**
 * 検索ページの SearchParams のスキーマ
 */
export const searchParamSchema = z
  .object({
    q: z.string().min(1),
    page: pageSchema.optional(),
  })
  .strict()
  .transform((data) => ({
    q: data.q,
    page: data.page || 1,
  }));
