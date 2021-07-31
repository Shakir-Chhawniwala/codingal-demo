import React from 'react'

const HamburgerButton = () => {
    return (
      <button className="flex flex-col justify-around w-4 h-8 bg-transparent border-none box-border p-0 hover outline-none">
        <div className="w-8 h-px bg-black"></div>
        <div className="w-8 h-px bg-black"></div>
        <div className="w-8 h-px bg-black"></div>
      </button>
    );
}

export default HamburgerButton
