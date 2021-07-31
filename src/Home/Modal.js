import React, { useState } from "react";

const Modal = ({onCancel, stopHandleClick}) => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [isChecked, setIsChecked] = useState("");

  const handleClick = () => {
    stopHandleClick()
  }

  return (
    <div className="bg-white rounded-2xl  shadow-lg w-auto h-auto p-16 m-4">
      <form className="flex flex-col items-center justify-start w-full">
        <h3 className="text-3xl font-bold mb-8">
          Select a reason to end a class
        </h3>
        <div className="w-full flex flex-col justify-evenly">
          <label className="m-2 text-xl">
            <input
              className="m-2"
              type="radio"
              onChange={(e) => setIsChecked(e.target.value)}
              checked={isChecked === "Class completed"}
              value="Class completed"
              onClick={() => setShow(false)}
            />
            Class completed
          </label>

          <label className="m-2 text-xl">
            <input
              className="m-2"
              type="radio"
              onClick={() => setShow(true)}
              onChange={(e) => setIsChecked(e.target.value)}
              checked={isChecked === "Class interrupted/aborted"}
              value="Class interrupted/aborted"
            />
            Class interrupted/aborted
          </label>
        </div>
        {show && (
          <div className="transition-transform flex flex-col justify-evenly">
            <label className="m-2">
              <input
                className="m-2"
                type="radio"
                onChange={(e) => setIsChecked(e.target.value)}
                checked={isChecked === "Student didn't show up for the class."}
                value="Student didn't show up for the class."
                onClick={() => setHide(false)}
              />
              Student didn't show up for the class.
            </label>

            <label className="m-2">
              <input
                className="m-2"
                type="radio"
                onChange={(e) => setIsChecked(e.target.value)}
                checked={isChecked === "Student didn't show any interest."}
                value="Student didn't show any interest."
                onClick={() => setHide(false)}
              />
              Student didn't show any interest.
            </label>

            <label className="m-2">
              <input
                className="m-2"
                type="radio"
                onChange={(e) => setIsChecked(e.target.value)}
                checked={isChecked === "Student got disconnected."}
                value="Student got disconnected."
                onClick={() => setHide(false)}
              />
              Student got disconnected.
            </label>

            <label className="m-2">
              <input
                className="m-2"
                type="radio"
                onChange={(e) => setIsChecked(e.target.value)}
                checked={isChecked === "I got disconnected."}
                value="I got disconnected."
                onClick={() => setHide(false)}
              />
              I got disconnected.
            </label>

            <label className="m-2">
              <input
                className="m-2"
                type="radio"
                onClick={() => setHide(true)}
                onChange={(e) => setIsChecked(e.target.value)}
                checked={isChecked === "Other reason"}
                value="Other reason"
              />
              Other reason
            </label>

            {hide && (
              <textarea
                type="text"
                placeholder="Type here..."
                className="w-full h-full border-current border-2 p-1 transition-transform"
              />
            )}
          </div>
        )}

        <div>
          <button
            type="submit"
            className="w-28 h-12 bg-red-500 hover:bg-red-700 rounded-md m-4 primary"
            onClick={handleClick}
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
