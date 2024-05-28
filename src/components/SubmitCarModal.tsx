import { FC } from "react";
import Modal from "./Modal";

interface Props {
  open: boolean;
  goNext: () => void;
  goBack: () => void;
  text: string;
}

const SubmitCarModal: FC<Props> = ({ open, goNext, goBack, text }) => {
  return (
    <>
      {open ? (
        <Modal>
          <div className="w-full space-y-4">
            <h1 className="text-xl">{text}</h1>
            <div className="flex w-full justify-between space-x-2">
              <button className="btn w-full bg-orange-500" onClick={goNext}>
                Yes
              </button>
              <button className="btn w-full" onClick={goBack}>
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default SubmitCarModal;
