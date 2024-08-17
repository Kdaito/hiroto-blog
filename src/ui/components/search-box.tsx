"use client";

import { searchInputSchema } from "@/validation/schema";
import { SearchInputSchema } from "@/validation/schema/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SearchBox: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchInputSchema>({ resolver: zodResolver(searchInputSchema) });

  const onSubmit = (data: SearchInputSchema) => {
    // 入力値をサニタイズしてから遷移する
    const query = encodeURIComponent(data.query);
    router.push(`/blog/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <input
          className="bg-slate-100 text-sm rounded-l px-4 py-2 w-full outline-none"
          placeholder="キーワードを入力"
          type="text"
          {...register("query")}
        />

        <button
          className="bg-slate-500 border w-[20%] rounded-r flex items-center justify-center hover:opacity-80 duration-200"
          type="submit"
        >
          <img
            src="/search-icon.svg"
            alt="search"
            className="w-[20px] h-[20px]"
          />
        </button>
      </div>
      <p className="px-2 pt-2 text-xs text-rose-500">{errors.query?.message}</p>
    </form>
  );
};

export default SearchBox;
