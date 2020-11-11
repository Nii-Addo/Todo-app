import styled from "styled-components";

export const TodoFormWrapper = styled.div`
  width: 44%;
  height: 17rem;
  position: fixed;
  align-items: center;
  padding: 0.5rem;
  border: 0.5px solid grey;
  border-radius: 7px;
  z-index: 1;
  background: white;

  .form-card {
    background: white;
    border: 0 none;
    border-radius: 0px;
    padding: 20px 30px 20px 30px;
    box-sizing: border-box;
    width: 94%;
    margin: 0 3% 20px 3%;
    position: relative;
  }

  h1 {
    margin: 0.2rem 3rem;
  }

  fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    position: relative;
  }

  fieldset:not(:first-of-type) {
    display: none;
  }

  fieldset .form-card {
    text-align: left;
    color: #9e9e9e;
  }

  input,
  textarea {
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

  input:focus,
  textarea:focus {
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
    background: skyblue;
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

  .form-div {
    margin: 0.2rem;
    align-items: center;
  }
`;
