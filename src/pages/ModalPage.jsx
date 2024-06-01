import Modal from "../components/Modal";
import { useState } from "react";

const ModalPage = () => {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        click to open/close
      </button>
      <Modal show={show} onClose={toggleModal} />
    </>
  );
};

export default ModalPage;
