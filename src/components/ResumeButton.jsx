import { HiOutlineDownload } from "react-icons/hi";

export default function ResumeButton() {
  return (
    <a href="api/resume" download>
      <button className="h-10 border-white border-4 text-white rounded-lg py-2 px-4 flex items-center gap-2 hover:scale-105">
        Resume
        <HiOutlineDownload className="text-white" />
      </button>
    </a>
  );
}
