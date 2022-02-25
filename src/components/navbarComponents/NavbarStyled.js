import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const Content = styled.div`
  margin: auto;
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  padding-left: 35px;
  padding-right: 35px;

  @media screen and (max-width: 960px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-self: start;
  align-items: center;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const ImgLogo = styled.img`
  width: 50px;
  margin-right: 5px;

  @media screen and (max-width: 960px) {
    width: 45px;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: black;
    font-size: 2rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #ededed;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  height: 80px;
  font-size: 18px;
  border-bottom: 2px solid transparent;
  text-decoration: none;

  &:hover {
    background-color: #ededed;
    border-bottom: 2px solid #262626;
    transition: 0.4s ease-in;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
  }
`;

export const NavLinks = styled.div`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
`;
