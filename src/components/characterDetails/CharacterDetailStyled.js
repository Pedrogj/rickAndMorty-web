import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh; /*importante*/
  position: relative; /*importante*/
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
`;

export const Details = styled.div`
  display: flex;
  max-width: 1200px;
  width: 1000px;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 700px) {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
`;

export const Img = styled.img`
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
  width: 100%;
`;

export const Box = styled.div`
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: 0%;
  position: relative;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const Text1 = styled.h1`
  font-size: 35px;

  @media (max-width: 900px) {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Text2 = styled.h3`
  font-size: 20px;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  width: 100px;
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  color: #24292e;
  cursor: pointer;
  padding: 6px 16px;
  margin-top: 10px;
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
`;
