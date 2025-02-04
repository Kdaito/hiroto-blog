import Link from "next/link";

type Props = {
  total: number;
  pageSize: number;
  current: number;
  basePath: string;
  isUseQueryParam?: boolean;
};

const PageNation: React.FC<Props> = ({
  total,
  pageSize,
  current,
  basePath,
  isUseQueryParam = false,
}) => {
  const totalPage = Math.ceil(total / pageSize);

  const isPreviousDisabled = current === 1;
  const isNextDisabled = current === totalPage || totalPage === 0;

  const previousHref = isUseQueryParam
    ? `${basePath}&page=${current - 1}`
    : `${basePath}/${current - 1}`;

  const nextHref = isUseQueryParam
    ? `${basePath}&page=${current + 1}`
    : `${basePath}/${current + 1}`;

  return (
    <div className="bg-white inline-flex items-center rounded-full overflow-hidden select-none">
      <Link
        href={previousHref}
        className={`px-4 py-2 hover:bg-slate-100 duration-200 ${
          isPreviousDisabled ? "pointer-events-none opacity-10" : ""
        }`}
        aria-disabled={isPreviousDisabled}
      >
        {"<"}
      </Link>
      <p className="h-full border-x py-2 px-4">
        {current} of {totalPage === 0 ? 1 : totalPage}
      </p>
      <Link
        href={nextHref}
        className={`px-4 py-2 hover:bg-slate-100 duration-200 ${
          isNextDisabled ? "pointer-events-none opacity-10" : ""
        }`}
        aria-disabled={isNextDisabled}
      >
        {">"}
      </Link>
    </div>
  );
};

export default PageNation;
