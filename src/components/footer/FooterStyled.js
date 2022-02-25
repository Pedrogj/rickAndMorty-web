import styled from "styled-components";

export const FooterNav = styled.div`
  background-color: #262626;
  padding: 35px 0px 35px 0px;
  width: 100%;
  position: absolute;
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;

  @media screen and (max-width: 960px) {
    padding-left: 18px;
    padding-right: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-self: start;
  align-items: center;
  font-size: 1.5rem;
`;

export const Img = styled.img`
  width: 50px;
`;

export const Text = styled.div`
  color: white;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;
