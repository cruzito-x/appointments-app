import Link from "next/link";

const SeeMore = ({ link = "", label = "" }) => {
  return (
    <div className="flex justify-start mt-5">
      <Link
        href={link}
        className="w-full text-blue-900 hover:text-blue-500 font-normal text-sm transition-all duration-300"
      >
        {label} &gt;&gt;&gt;
      </Link>
    </div>
  );
};

export default SeeMore;
