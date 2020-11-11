import React, { useState } from "react";
import { TodoFormWrapper } from "../styles/NewTodo";
import axios from "axios";
import { Form } from "../styles/FlowForm";
import { Redirect } from "react-router-dom";

const NewTodo = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [redirectOnSignup, setRedirectOnSignup] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    const todoDto = {
      fullName: fullName,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    axios
      .post(process.env.REACT_APP_API_PUBLIC_URL + "/users/register", todoDto)
      .then((response) => {
        const { data } = response;
        setSuccessMessage(data.message);
        setError("");
        setRedirectOnSignup(true);
      })
      .catch((error) => {
        const { data } = error.response;
        setError(data.message);
        setSuccessMessage("");
      });
  };

  return (
    <Form>
      {redirectOnSignup && <Redirect to="/" />}
      <h1>Signup to do more</h1>
      <form action="">
        <div className="form-card">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="fullName"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="confirm password "
              onChange={(e) => setPasswordConfirmation(e.target.value)}
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
