import { HiOutlineDownload } from "react-icons/hi";
import useStore from "../context/store";

export default function ResumeButton() {
  const { setSuccessMsg } = useStore();
  return (
    <a href="https://danbogare.onrender.com/api/resume" download="bogare.pdf">
      <button
        onClick={() => setSuccessMsg("Resume downloaded successfully")}
        className="h-10 border-white border-4 text-white rounded-lg py-2 px-4 flex items-center gap-2 hover:scale-105"
      >
        Resume
        <HiOutlineDownload className="text-white" />
      </button>
    </a>
  );
}
