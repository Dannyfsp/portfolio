import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "../context/store";
import { AiOutlineClose } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import Toast from "./Toast";

export default function Modal() {
  const { toggleModal, isOpen, setSuccessMsg, setErrorMsg } = useStore();

  const [credentials, setCredentials] = useState({
    names: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!isValidEmail) {
        setErrorMsg("Please enter a valid email address");
        return;
      }

      const res = await fetch("http://localhost:2113/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (res.ok) {
        setCredentials({
          names: "",
          email: "",
          message: "",
        });
        setSuccessMsg("Message sent successfully, Thank you.");
        toggleModal();
      } else {
        setErrorMsg("Something went wrong, try later");
      }
    } catch (error) {
      setErrorMsg("Something went wrong, try later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto min-h-screen z-40"
          >
            <div className="border-2 border-gray-600 rounded-lg shadow-lg mx-auto w-full sm:w-96 md:w-80 px-2 bg-black">
              <div className="flex justify-end my-2">
                <button
                  onClick={toggleModal}
                  className="rounded-full bg-white border border-black"
                >
                  <AiOutlineClose className="text-black m-1" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <h1 className="font-bold text-2xl">Hire Me 😊</h1>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    className="text-black w-full py-1 outline-none text-lg"
                    type="text"
                    placeholder="Enter your names"
                    value={credentials.names}
                    onChange={handleChange}
                    name="names"
                  />
                </div>
                <div>
                  <input
                    className="text-black w-full py-1 outline-none text-lg"
                    type="email"
                    placeholder="Enter your email address"
                    value={credentials.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div>
                  <textarea
                    className="text-black w-full py-1 outline-none text-lg"
                    name="message"
                    placeholder="Write me a short message"
                    cols="30"
                    rows="10"
                    value={credentials.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-white text-black border-2 border-white shadow-lg w-full text-center rounded-lg font-medium text-lg py-1"
                    type="submit"
                    disabled={
                      isLoading || !credentials.names || !credentials.email
                    }
                  >
                    {isLoading ? "Loading..." : "Send"}
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center space-x-4 my-4">
                <div className="flex-1 border-t"></div>
                <div className="text-white font-bold">OR</div>
                <div className="flex-1 border-t"></div>
              </div>
              <div className="flex justify-center text-center text-lg">
                contact me via email or whatsapp
              </div>
              <div className="flex justify-center items-center space-x-4 mb-4 mt-1">
                <a href="mailto:danbogare@gmail.com">
                  <button className="bg-white text-black border-2 shadow-lg border-white rounded-lg flex items-center justify-center px-2 space-x-1">
                    <CgMail className="text-xl text-red-600" />
                    <h3>email</h3>
                  </button>
                </a>
                <a href="https://wa.me/+2348133111684">
                  <button className="bg-white text-black border-2 shadow-lg border-white rounded-lg flex items-center justify-center px-2 space-x-1">
                    <BsWhatsapp className="text-green-600" />
                    <h1>whatsapp</h1>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Toast />
    </>
  );
}
