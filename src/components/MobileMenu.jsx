import { Link } from "react-router-dom";
import HireButton from "./HireButton";
import ResumeButton from "./ResumeButton";
import useStore from "../context/store";
import { motion } from "framer-motion";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import twitter from "../assets/twitter.png";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Projects", href: "/projects" },
  { id: 4, title: "Articles", href: "/articles" },
];

export default function MobileMenu() {
  const { isMobileMenuOpen, toggleMobileMenu } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Initial state
      animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        x: isMobileMenuOpen ? 0 : -100,
      }} // Animation states
      transition={{ ease: "easeOut", duration: 0.5 }} // Easing and duration
      className={`${
        isMobileMenuOpen ? "md:flex w-full h-screen bg-gray-600" : "hidden"
      }`}
    >
      {/* Mobile menu content */}
      <ul className="flex flex-col items-center gap-4 pt-16 text-white">
        {links.map((link) => (
          <li key={link.id} onClick={() => toggleMobileMenu()}>
            <Link to={link.href}>{link.title}</Link>
          </li>
        ))}
        <HireButton />
        <ResumeButton />

        <div className="md:flex gap-4 mt-4">
          <ul className="flex items-center gap-4">
            <li className="text-xl">
              <a href="https://linkedin.com/in/danbogare">
                <BsLinkedin />
              </a>
            </li>
            <li className="text-xl">
              <a href="https://twitter.com/danbogare">
                <img src={twitter} alt="twitter" className="w-4 h-4" />
              </a>
            </li>
            <li className="text-xl">
              <a href="https://wa.me/+2348133111684">
                <BsWhatsapp className="text-green-600" />
              </a>
            </li>
            <li className="text-2xl">
              <a href="https://github.com/Dannyfsp">
                <AiOutlineGithub />
              </a>
            </li>
            <li className="text-xl">
              <a href="https://medium.com/@Dannyfsp">
                <FaMedium size={22} />
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </motion.div>
  );
}
