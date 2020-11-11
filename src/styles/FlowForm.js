import styled from "styled-components";

export const Form = styled.div`
  min-height: 10rem;
  width: 40%;
  position: relative;
  left: 20rem;
  top: 5rem;
  align-items: center;
  padding: 1rem;
  border: 0.5px solid grey;
  border-radius: 7px;
  z-index: 1;
  background: white;

  h4 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5rem;
  }

  input {
    padding: 0px 8px 4px 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2c3e50;
    font-size: 16px;
    letter-spacing: 1px;
  }

  input:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: none;
    font-weight: bold;
    border-bottom: 2px solid skyblue;
    outline-width: 0;
  }

  .action-button {
    width: 100px;
    background: #17b978;
    font-weight: bold;
    font-size: 1.2rem;
    color: black;
    border: 0 none;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
  }

  .action-button:hover,
  .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px skyblue;
  }
`;
