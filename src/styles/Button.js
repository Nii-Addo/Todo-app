import styled from "styled-components";

export const ActionButton = styled.button`
  width: 7em;
  height: 3rem;
  border: none;
  background-color: green;
  padding: 0.1rem;
  font-size: 1.3rem;
  cursor: pointer;
  background: ${(props) => (props.primary ? "#fcefee" : "red")};
  color: ${(props) => (props.primary ? "black" : "white")};
`;

export const ThemeButton = styled.button`
  width: auto;
  height: 2rem;
`;
