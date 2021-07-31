import React, { useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  return (
    <div className="bg-white rounded-2xl  shadow-lg w-auto h-auto p-16 m-4">
      <form className="flex flex-col items-center justify-start">
        <h3 className="text-3xl font-bold mb-8">
          Select a reason to end a class
        </h3>
        <div className="w-full">
          <div className="px-4 pb-4">
            <input type="radio" />
            <label className="m-2 text-xl">Class completed</label>
          </div>
          <div className="px-4 pb-4">
            <input type="radio" onClick={handleClick} />
            <label className="m-2 text-xl">Class interrupted/aborted</label>
          </div>
        </div>
        {show && (
          <div className="delay-700">
            <div className="px-4 pb-4">
              <input type="radio" />
              <label className="m-2">
                Student didn't show up for the class.
              </label>
            </div>
            <div className="px-4 pb-4">
              <input type="radio" />
              <label className="m-2">Student didn't show any interest.</label>
            </div>
            <div className="px-4 pb-4">
              <input type="radio" />
              <label className="m-2">Student got disconnected</label>
            </div>
            <div className="px-4 pb-4">
              <input type="radio" />
              <label className="m-2">I got disconnected</label>
            </div>
            <div className="px-4 pb-4">
              <input type="radio" />
              <label className="m-2">Other reason</label>
            </div>
            <textarea
              type="text"
              className="w-5/6 h-20 border-current border-2 p-1"
              placeholder="Type here..."
            ></textarea>
          </div>
        )}
        <div>
          <button
            type="button"
            className="w-28 h-12 bg-red-500 hover:bg-red-700 rounded-md m-4 primary"
          >
            End Class
          </button>
          <button type="submit" className="w-28 h-12">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
