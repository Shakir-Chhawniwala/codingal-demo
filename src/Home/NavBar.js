import React, {useState} from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import Modal from "./Modal"
import HamburgerButton from "./HamburgerButton";
import "../styles/navbar.css"

const NavBar = () => {

  const [show, setShow] = useState(false)
  
  const handleClick = () => {
    setShow(true)
  }
  const stophandleClick = () => {
    setShow(false)
  }
const handleCancel = (timer) => {
clearTimeout(timer)
}
  return (
    <React.Fragment>
      {!show ? (
        <nav className="flex items-center justify-between" id="navbar-desktop">
          <div className="flex items-center justify-between">
            <img
              src="https://cdn.codingal.com/images/logos/logos-main/logo.svg"
              alt="logo"
              className="w-12 h-12 m-2"
            />
            <div className="w-px h-16 bg-black m-2"></div>
            <div>Trial Lesson [Grade 1-3]</div>
          </div>

          <div className="flex items-center justify-evenly">
            <div className="timer">
              <Timer onCancel={handleCancel}/>
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
          <Modal onCancel={handleCancel} stophandleClick={stophandleClick}/>
        </div>
      )}
      <div className="lg:w-48" id="mobile-navbar">
        <img
          src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
          alt="Codingal"
          className="h-8 cursor-pointer mr-20"
        />
        <div className="m-4">
          <HamburgerButton />
        </div>
      </div>
    </React.Fragment>
  );
};


export default NavBar;
