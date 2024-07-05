import { ModalState } from "@/lib/types";
import { create } from "zustand";

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () =>
    set((state) => {
      // console.log("Opening modal", {
      //   previousState: state,
      //   newState: { isOpen: true },
      // });
      return { isOpen: true };
    }),
  closeModal: () =>
    set((state) => {
      // console.log("Closing modal", {
      //   previousState: state,
      //   newState: { isOpen: false },
      // });
      return { isOpen: false };
    }),
  productID: "",
  setProductIdModal: (id: string) =>
    set((state) => {
      return { productID: id };
    }),
  fetchSwitch: false,
  setFetchOn: () =>
    set((state) => {
      // console.log("Opening modal", {
      //   previousState: state,
      //   newState: { isOpen: true },
      // });
      return { fetchSwitch: true };
    }),
  setFetchoff: () =>
    set((state) => {
      // console.log("Opening modal", {
      //   previousState: state,
      //   newState: { isOpen: true },
      // });
      return { fetchSwitch: false };
    }),
}));

export default useModalStore;
