import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-3 sm:px-6 md:px-10">
      <button
        type="button"
        aria-label="Go back"
        className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-[#FEFEFF] px-3 py-1 sm:px-4 sm:py-2 rounded-2xl cursor-pointer"
      >
        <FaArrowLeft />
        Back
      </button>
      <span className="text-base cursor-pointer sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#965CB6] to-[#630C92] text-transparent bg-clip-text">
        M-Alliance
      </span>
    </div>
  );
}
