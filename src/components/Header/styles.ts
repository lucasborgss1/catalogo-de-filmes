import styled from "styled-components";

export const StyledHeader = styled.header`
    color: white;
    padding: 1rem;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderWrapper = styled.div`
    width: 1440px;
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

export const NavList = styled.nav``;

export const List = styled.ul`
    display: flex;
    gap: 2rem;
    align-items: center;
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    cursor: default;

    a {
        text-decoration: none;
    }
`;

export const ListItemAdress = styled.div`
    color: white;

    transition: color 0.4s;

    &:hover {
        color: #f5c51c;
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
            color: #f5c51c;
            transition: color 0.4s;
        }
    }
`;
