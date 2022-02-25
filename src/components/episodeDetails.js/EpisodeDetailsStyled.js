import styled from "styled-components";

export const Content = styled.div`
  /*  display: flex;
  flex-wrap: wrap;
  justify-content: center; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  padding: 40px 0;
  width: 76%;
  gap: 20px;

  @media (min-width: 700px) {
    padding: 1.5rem;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Box = styled.div`
  display: flex;
  max-width: 600px;
  height: 220px;
  overflow: hidden;
  border-radius: 0.5rem;
  //margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 700px) {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
`;

export const Image = styled.img`
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
  width: 100%;
`;

export const TextContent = styled.div`
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: 0%;
  position: relative;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  width: 100%;
  padding: 0 5px;
  min-width: 300px;
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 0 5px 10px;
  min-width: 300px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 205px 0px 205px;

  @media (max-width: 1440px) {
    padding-left: 163px;
    padding-right: 163px;
  }

  @media (max-width: 768px) {
    padding-left: 110px;
    padding-right: 110px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 20px;
    align-items: flex-start;
    padding-left: 20px;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 600;
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  color: #24292e;
  cursor: pointer;
  padding: 12px 32px;
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
