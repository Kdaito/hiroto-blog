"use client";

import { useRouter } from "next/navigation";

const ClientBackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className="text-sm border rounded px-12 py-2 hover:bg-black hover:text-white hover:border-none duration-200"
      onClick={() => router.back()}
    >
      戻る
    </button>
  );
};

export default ClientBackButton;
