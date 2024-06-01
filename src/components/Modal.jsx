const Modal = ({ show, onClose }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={onClose}>
          <div
            className="relative p-6 bg-white rounded shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute text-gray-600 top-2 right-2 hover:text-gray-900"
            >
              &times;
            </button>
            <div>modal body hereeeeee</div>
          </div>
        </div>
      )}
      <div>{show ? "true" : "false"}</div>
    </>
  );
};

export default Modal;
