import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen lg:px-28 md:8 px-2">
      <Navbar />
      {children}
      <Footer />
      <Modal />
      <Toast />
    </div>
  );
}
