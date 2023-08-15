import useStore from "../context/store";
import { AiOutlineRight } from "react-icons/ai";

export default function HireButton() {
  const { toggleModal, closeMobileMenu } = useStore();

  const handleHireMe = () => {
    closeMobileMenu();
    toggleModal();
  };

  return (
    <button
      onClick={handleHireMe}
      className="h-10 bg-white border-4 border-white text-black rounded-lg py-2 px-4 flex items-center gap-2 hover:scale-105"
    >
      Hire Me
      <AiOutlineRight className="text-black" />
    </button>
  );
}
