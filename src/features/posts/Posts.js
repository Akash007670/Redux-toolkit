import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </article>
  ));

  return (
    <div>
      <h2>All Posts</h2>
      {renderPosts}
    </div>
  );
};

export default Posts;