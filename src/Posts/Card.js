import React from "react";

const Card = (props) => {
  return (
    <div className="w-full h-auto rounded-xl shadow-lg m-4 text-left p-2">
      {props.children}
    </div>
  );
};

export default Card;
