import React from "react";
import Card from "./Card"

const PostCard = ({title,body}) => {
  return (
    <li>
      <Card>
        <h5>{title}</h5>
        <p>{body}</p>
      </Card>
    </li>
  );
};

export default PostCard;
