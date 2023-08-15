import useStore from "../context/store";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";

export default function Toast() {
  const { errorMsg, successMsg, isError, isSuccess, onClose } = useStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [isError, isSuccess]);

  return (
    <AnimatePresence>
      {isError && (
        <motion.div
          className="fixed top-4 right-4 w-96 flex items-center justify-center space-x-2 bg-white text-red-500 border-2 border-red-600 p-4 rounded-md shadow-md z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <BiErrorCircle className="text-2xl" /> <p>{errorMsg}</p>
        </motion.div>
      )}
      {isSuccess && (
        <motion.div
          className="fixed top-4 right-4 w-96 flex items-center justify-center space-x-2 bg-white text-green-500 border-green-600 border-2 p-4 rounded-md shadow-md z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <GiCheckMark className="text-2xl" /> <p>{successMsg}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
