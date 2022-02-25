import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh; /*importante*/
  position: relative; /*importante*/
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: grid;
  justify-self: center;
  align-items: center;

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const Button = styled.button`
  width: 400px;
  font-size: 15px;
  font-weight: 600;
  appearance: none;
  background-color: #c2c2d6;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  color: #24292e;
  cursor: pointer;
  padding: 12px 32px;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;

  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  @media (max-width: 500px) {
    padding: 6px 16px;
    width: auto;
    font-size: 12px;
  }
`;
