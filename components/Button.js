import React from "react";
import styled from "styled-components";
import css from "styled-jsx/css";
const primary= "#3d6eb8"
const secondary= "#a514ba"
const StyledButton = styled.button`
  background-color: #3d6eb8;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  svg {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
  }
  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 1rem;
      padding: 10px 20px;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
      }
    `}
  ${"" /* white buttons */}
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
      border: 1px solid #fff;
      &:hover {
        background-color: #222;
        color: #fff;
        border: 1px solid #fff;
      }
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}

    ${"" /* colored buttons */}
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${secondary};
      border: 1px solid ${secondary};
      color: #fff;
    `}
  ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid ${secondary};
      color: ${secondary};
      &:hover {
        background-color: ${secondary};
        color: #fff;
        border: 1px solid ${secondary};
        scale: 1.1;
        transition: 0.3s;
      }
    `}
`;
const Button = ({children, ...rest}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

