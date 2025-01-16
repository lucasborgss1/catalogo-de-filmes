import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 10px;
  margin-top: 30px;
  color: white;
`;

export const HeaderWrapper = styled.div`
  width: 1600px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #f5c51c;
  cursor: default;
  span {
    background-color: #f5c51c;
    padding: 3px 10px;
    margin-right: 2px;
    border-radius: 5px;
    color: #000;
  }
`;

export const NavList = styled.nav`
  width: 670px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: default;
`;

export const ListItemAdress = styled.a`
  text-decoration: none;
  color: white;

  transition: color 0.4s;

  &:hover {
    color: #b5b5b5;
    transition: color 0.4s;
  }
`;

export const SearchButton = styled.button`
  margin-left: 3rem;
  display: flex;
  align-items: center;
  border: none;
  align-items: center;
  background-color: transparent;
  transition: color 0.4s;

  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: white;
    transition: color 0.4s;

    &:hover {
      color: #b5b5b5;
      transition: color 0.4s;
    }
  }
`;
