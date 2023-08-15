import { motion } from "framer-motion";
import danny_vector from "../assets/danny_vector.png";

export default function HeroImage() {
  return (
    <motion.div
      animate={{ y: [-10, 0, -10] }} // Animation sequence: bounce up, reset, bounce down
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} // Repeat the animation infinitely
      className="md:w-1/2"
    >
      <img
        loading="lazy"
        src={danny_vector}
        alt="danny img"
        className="h-full w-full rounded-full"
      />
    </motion.div>
  );
}
