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
  border: none;
  font-size: 1.1rem;
`;

export const LogoutButton = styled(ThemeButton)`
  font-size: 1rem;
  margin: 1rem;
  background: transparent;
  color: white;
  cursor: pointer;
  width: 6rem;

  &:hover {
    background: #fcefee;
    color: black;
  }
`;
