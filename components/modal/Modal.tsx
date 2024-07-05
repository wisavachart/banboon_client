const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      {children}
    </dialog>
  );
};

export default Modal;
