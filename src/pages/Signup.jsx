import React, { useState, useContext } from "react";
import { TodoFormWrapper } from "../styles/NewTodo";
import { PublicFetch } from "../util/Fetch";
import { AuthContext } from "../contexts/AuthContext";
import { Form } from "../styles/FlowForm";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
  const authContext = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [redirectOnSignup, setRedirectOnSignup] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todoDto = {
      fullName: fullName,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    PublicFetch.post("/users/register", todoDto)
      .then((response) => {
        const { data } = response;
        authContext.setAuthState(data);
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

export default Signup;
