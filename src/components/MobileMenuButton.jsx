import useStore from "../context/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileMenuButton() {
  const { toggleMobileMenu, isMobileMenuOpen } = useStore();

  return (
    <button className="md:hidden block text-3xl" onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
    </button>
  );
}
