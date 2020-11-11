import React, { useState } from "react";
import { TodoFormWrapper } from "../styles/NewTodo";
import axios from "axios";
import { Form } from "../styles/FlowForm";
import { Redirect } from "react-router-dom";

const NewTodo = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todoDto = {
      email: email,
      password: password,
    };
    axios
      .post(process.env.REACT_APP_API_PUBLIC_URL + "/users/login", todoDto)
      .then((response) => {
        const { data } = response;
        setSuccessMessage(data.message);
        setError("");
        setRedirectOnLogin(true);
      })
      .catch((error) => {
        const { data } = error.response;
        setError(data.message);
        setSuccessMessage("");
      });
  };

  return (
    <Form>
      {redirectOnLogin && <Redirect to="/" />}
      <form action="">
        <h4>Login</h4>
        <div className="form-card">
          <div className="">
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
    </Form>
  );
};

export default NewTodo;
