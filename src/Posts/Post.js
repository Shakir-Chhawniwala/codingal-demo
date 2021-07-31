import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import Loader from "react-loader-spinner";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 5;

  const getPosts = async () => {
    setIsFetching(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setPosts([...posts, ...data]);
    setIsFetching(false);
  };

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  function getMorePosts() {
    const timerId = setTimeout(() => {
      setPage(page + 1);
      getPosts();
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isFetching) return;
    getMorePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]) 

  return (
    <div className="w-9/12 h-3/4 m-auto">
      <PostList posts={posts} />
      {isFetching && (
        <div className="h-auto grid place-items-center">
          <Loader
            className="m-auto"
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000}
          />
        </div>
      )}
    </div>
  );
};
 
export default Post;
