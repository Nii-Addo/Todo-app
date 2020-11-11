import React, { useState, useContext } from "react";
import { TodoFormWrapper } from "../styles/NewTodo";
import { PublicFetch } from "../util/Fetch";
import { Form } from "../styles/FlowForm";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const authContext = useContext(AuthContext);
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
    PublicFetch.post("/users/login", todoDto)
      .then((response) => {
        const { data } = response;
        authContext.setAuthState(data);
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

export default Login;
