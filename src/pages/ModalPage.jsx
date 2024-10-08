import Modal from "../components/Modal";
import { useState } from "react";


const ModalPage = () => {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={toggleModal}
          className="px-4 py-2 text-black bg-white rounded hover:bg-gray-300"
        >
          click to open/close
        </button>
        <Modal show={show} onClose={toggleModal}>
          <div>
            this is a children prop Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corrupti similique et aperiam illum error, dolorem
            voluptas accusantium quam iste fugit! Dignissimos iste ut enim ab
            quaerat nam modi accusamus, ullam, ratione alias, distinctio aliquid
            provident quibusdam saepe blanditiis! Similique sequi magni nam
            fugiat laudantium amet consequuntur architecto dolor facere,
            perspiciatis numquam officiis rem impedit voluptates eveniet
            nesciunt. Ipsam aspernatur ad perspiciatis nam consectetur sed
            incidunt placeat dolores, commodi, nesciunt hic esse eligendi
            explicabo nobis? Vitae, quod! Fugiat totam quia dicta consequuntur
            soluta ipsam quibusdam adipisci aut commodi alias? Dolorum eligendi
            est recusandae accusantium accusamus excepturi voluptatem. Delectus
            nesciunt corporis maxime!
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalPage;
