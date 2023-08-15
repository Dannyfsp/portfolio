import { create } from "zustand";

const useStore = create((set) => ({
  isMobileMenuOpen: false,
  isOpen: false,
  isError: false,
  isSuccess: false,
  errorMsg: "",
  successMsg: "",
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set(() => ({ isMobileMenuOpen: false })),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set(() => ({ isSuccess: false, isError: false })),
  setErrorMsg: (errorMsg) => set(() => ({ isError: true, errorMsg })),
  setSuccessMsg: (successMsg) => set(() => ({ isSuccess: true, successMsg })),
}));

export default useStore;
