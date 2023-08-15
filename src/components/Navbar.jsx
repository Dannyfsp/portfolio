import { useLocation, Link } from "react-router-dom";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import twitter from "../assets/twitter.png";
import HireButton from "./HireButton";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import gmail from "../assets/gmail.png";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Projects", href: "/projects" },
  { id: 4, title: "Articles", href: "/articles" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 left-0 z-30 bg-black">
      <nav className="flex justify-between items-center">
        <a className="md:hidden text-4xl" href="mailto:danbogare@gmail.com">
          <img src={gmail} alt="gmail" className="w-7 h-6" />
        </a>

        <Link to="/" className="flex items-center hover:scale-105">
          <h1 className="rounded-full bg-white border-2 border-white text-black p-2 text-2xl m-1">
            db
          </h1>
          <h1>danbogare</h1>
        </Link>

        <div className="md:flex gap-2 hidden">
          <ul className="flex items-center gap-2">
            <li className="text-2xl hover:pb-1">
              <a href="mailto:danbogare@gmail.com">
                <img src={gmail} alt="gmail" className="w-5 h-4" />
              </a>
            </li>
            <li className="text-xl hover:pb-1">
              <a href="https://linkedin.com/in/danbogare">
                <BsLinkedin />
              </a>
            </li>
            <li className="text-xl hover:pb-1">
              <a href="https://twitter.com/danbogare">
                <img src={twitter} alt="twitter" className="w-4 h-4" />
              </a>
            </li>
            <li className="text-xl hover:pb-1">
              <a href="https://wa.me/+2348133111684">
                <BsWhatsapp className="text-green-600" />
              </a>
            </li>
            <li className="text-2xl hover:pb-1">
              <a href="https://github.com/Dannyfsp">
                <AiOutlineGithub />
              </a>
            </li>
            <li className="text-xl hover:pb-1">
              <a href="https://medium.com/@Dannyfsp">
                <FaMedium size={22} />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex gap-4 hidden">
          <ul className="flex items-center lg:gap-4 md:gap-2">
            {links.map((link) => (
              <li key={link.id} className="hover:pb-1">
                <Link
                  to={link.href}
                  className={`${
                    location.pathname === link.href
                      ? "bg-gray-400 px-4 py-1 rounded-lg"
                      : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <HireButton />
        </div>
        <MobileMenuButton />
      </nav>
      <MobileMenu />
    </header>
  );
}
