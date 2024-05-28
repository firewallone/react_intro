import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("portal");
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>,
    elRef.current,
  );
};

export default Modal;
