import styled from "styled-components";

export const NavBarWrapper = styled.div`
  z-index: 1;
  ul {
    position: fixed;
    top: 0;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    align-self: center;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #4caf50;
  }

  .right {
    float: right;
    display: flex;
    flex: wrap;
  }

  .brand {
    float: left;
    margin-left: 10rem;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.6rem;
  }

  .btn {
    align-self: center;
    margin: 0.8rem;
  }
`;
