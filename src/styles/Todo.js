import styled from "styled-components";

export const TodoWrapper = styled.div`
  width: 47%;
  min-height: 5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  background-color: #c5e3f6;
  line-height: 2rem;

  .task {
    display: flex;
    flex: wrap;

    /* CHECKBOX STYLES */
    .c-cb {
      box-sizing: border-box;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.25;
      min-height: 44px;
      clear: left;
    }

    .c-cb > input[type="checkbox"] {
      box-sizing: border-box;
      top: -2px;
      left: -2px;
      width: 30px;
      height: 30px;
    }
    .c-cb > input[type="checkbox"] {
      -webkit-font-smoothing: antialiased;
      cursor: pointer;
      z-index: 1;
      margin: 0;
    }

    .c-cb > input[type="checkbox"]:focus + label::before {
      border-width: 4px;
      outline: 3px dashed #228bec;
    }

    .c-cb > label::after {
      box-sizing: content-box;
      content: "";
      position: absolute;
      top: 11px;
      left: 9px;
      width: 18px;
      height: 7px;
      transform: rotate(-45deg);
      border: solid;
      border-width: 0 0 5px 5px;
      border-top-color: transparent;
      opacity: 0;
      background: transparent;
    }
    .c-cb > input[type="checkbox"]:checked + label::after {
      opacity: 1;
    }
  }
  h3 {
    margin-top: 0;
    margin-left: 0.5rem;
    text-transform: capitalize;
    font-size: 1.6rem;
  }

  p {
    margin-top: 0;
    max-height: 3rem;
  }

  .actions {
    display: flex;
    flex: wrap;

    .actions-button {
      margin-right: 2rem;
    }
  }
`;
