import React from "react";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  
  return (
    <ul className="flex-col items-center justify-evenly">
      {posts.map((post) => {
        return <PostCard {...post} key={post.id} />;
      })}
    </ul>
  );
};

export default PostList;
