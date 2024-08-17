"use client"

import CategoryChip from "@/ui/components/category-chip";
import { useRouter } from "next/navigation";

type Props = {
  height?: number;
  minHeight?: number;
};

const Card: React.FC<Props> = ({ height, minHeight }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/blog/item/1");
  }

  return (
    <button
      className="flex flex-col text-left w-full bg-white px-12 py-6 rounded hover:bg-slate-100 duration-200"
      style={{ height, minHeight }}
      onClick={onClick}
    >
      <h3 className="font-bold text-xl mb-2">
        【CSS】position: absoluteの中央寄せ方法まとめ
      </h3>
      <p className="text-sm opacity-70 my-2">投稿日: 20xx xx xx</p>
      <div className="flex gap-2 flex-wrap overflow-hidden">
        <CategoryChip category={{ id: "1", label: "CSS" }} />
      </div>
      <p className="mt-3">
        position:
        absoluteを適用した要素を、上下左右それぞれの中央寄せにする方法をまとめました。
      </p>
    </button>
  );
};

export default Card;
