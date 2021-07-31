import React, {useState} from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import Modal from "./Modal"

const NavBar = () => {

  const [show, setShow] = useState(false)
  
  const handleClick = () => {
    setShow(true)
  }

  return (
    <React.Fragment>
      {!show ? (
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-evenly divide-x divide-green-700">
            <img
              src="https://cdn.codingal.com/images/logos/logos-main/logo.svg"
              alt="logo"
              className="w-12 h-12 m-4"
            />
            <div>Trial Lesson [Grade 1-3]</div>
          </div>

          <div className="flex items-center justify-evenly">
            <div className="timer">
              <Timer />
            </div>
            <button
              className="w-24 h-12 bg-red-500 hover:bg-red-700 rounded-md m-4 primary"
              onClick={handleClick}
            >
              End class
            </button>
            <button className="w-24 h-12 bg-red-500 hover:bg-red-700 rounded-md m-4 primary">
              <Link to="posts">Posts</Link>
            </button>
          </div>
        </nav>
      ) : (
        <div className=" h-screen grid place-items-center w-screen bg-gray-400">
          <Modal />
        </div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
