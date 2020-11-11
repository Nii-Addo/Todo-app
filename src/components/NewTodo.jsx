import React, { useState } from "react";
import { TodoFormWrapper } from "../styles/NewTodo";
import axios from "axios";

const NewTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { setSuccessMessage, setError } = props;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todoDto = {
      title: title,
      description: description,
    };
    axios
      .post(
        process.env.REACT_APP_API_AUTHENTICATED_URL + "/activities/",
        todoDto
      )
      .then((response) => {
        const { data } = response;
        setSuccessMessage(data.message);
        setError("");
      })
      .catch((error) => {
        const { data } = error.response;
        setError(data.message);
        setSuccessMessage("");
      });
  };

  return (
    <TodoFormWrapper>
      <h1>Create a new todo</h1>
      <form action="">
        <div className="form-card">
          <div className="">
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="">
            <textarea
              name="description"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="action-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </TodoFormWrapper>
  );
};

export default NewTodo;