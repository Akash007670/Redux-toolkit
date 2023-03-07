import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    userId: "",
  });
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const onContentChange = (e) => {
    setState({ ...state, description: e.target.value });
  };

  const authorChange = (e) => {
    setState({ ...state, userId: e.target.value });
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onSavePostHanlder = () => {
    const { title, description, userId } = state;
    if (title && description) {
      dispatch(postAdded(title, description, userId));

      setState({ title: "", description: "", userId: "" });
    }
  };

  const canSave =
    Boolean(state.title) && Boolean(state.description) && Boolean(state.userId);
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
        <label htmlFor="postAuthor">Author :</label>
        <select id="postAuthor" value={state.userId} onChange={authorChange}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Post Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          value={state.description}
          onChange={onContentChange}
        ></textarea>
        <button type="button" onClick={onSavePostHanlder} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
