import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  min-height: 100vh; /*importante*/
  position: relative; /*importante*/
`;

const rotate = keyframes`
0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Box = styled.div`
  border: 3px solid rgba(64, 64, 64);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border-left-color: transparent;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  animation: ${rotate} 1s ease infinite;
`;
