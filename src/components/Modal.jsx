const Modal = ({ show, onClose, children }) => {
  return (
    <>
      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-white bg-opacity-50"
          onClick={onClose}
        >
          <div className="relative w-9/12 h-auto p-8 bg-white rounded-md shadow-lg">
            <button
              onClick={onClose}
              className="absolute text-gray-600 top-0.5 right-2.5 hover:text-gray-900"
            >
              &times;
            </button>
            <>{children}</>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
