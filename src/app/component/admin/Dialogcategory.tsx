export default function Dialogcategory({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center z-50">
      <div
        style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)' }}
        className="modal-box bg-[#FFFFFF] w-[800px] min-h-[600px] p-[14px] gap-[10px] rounded-[14px] flex flex-col"
      >
        <div className="flex flex-row items-center w-full h-[32px]">
          <div className="flex flex-row items-center justify-end w-[32px] h-[32px] flex-1">
            <button
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                  stroke="#656C87"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
