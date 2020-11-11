import React, { useState } from "react";
import NavBar from "../components/NavBar";
import TodoList from "../components/TodoList";
import NewTodo from "../components/NewTodo";
import { HomeStyle } from "../styles/Home";

const Home = (props) => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <HomeStyle>
      <div className="nav">
        <NavBar />
      </div>
      <div className="new-todo">
        <NewTodo setError={setError} setSuccessMessage={setSuccessMessage} />
      </div>
      <div className="messages">
        {successMessage ? <div>{successMessage}</div> : null}
        {error ? <div>{error}</div> : null}
      </div>
      <div className="todos">
        <TodoList setSuccessMessage={setSuccessMessage} setError={setError} />
      </div>
    </HomeStyle>
  );
};

export default Home;
