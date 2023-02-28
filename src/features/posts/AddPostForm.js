import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const onContentChange = (e) => {
    setState({ ...state, description: e.target.value });
  };

  const onSavePostHanlder = () => {
    const { title, description } = state;
    if (title && description) {
      dispatch(postAdded(title, description));

      setState({ title: "", description: "" });
    }
  };
  return (
    <section>
      <p>Add a New post</p>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={state.title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Post Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          value={state.description}
          onChange={onContentChange}
        ></textarea>
        <button type="button" onClick={onSavePostHanlder}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
