import styled from "styled-components";

interface ListItemProps {
    isActive?: boolean;
}

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
    a {
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 700;
        color: #f5c51c;
        cursor: pointer;

        span {
            background-color: #f5c51c;
            padding: 3px 10px;
            margin-right: 2px;
            border-radius: 5px;
            color: #000;
        }
    }
`;

export const NavList = styled.nav`
    display: flex;
    gap: 2rem;
`;

export const List = styled.ul`
    display: flex;
    gap: 2rem;
    align-items: center;
    list-style: none;
`;

export const ListItem = styled.li<ListItemProps>`
    display: flex;
    align-items: center;
    cursor: default;

    a {
        text-decoration: none;
    }

    div {
        color: ${({ isActive }) => (isActive ? "#f5c51c" : "white")};
        transition: color 0.4s;

        &:hover {
            color: #f5c51c;
        }
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

export const SearchContainer = styled.div`
    display: flex;

    height: 100%;
    align-items: center;
    gap: 1rem;
    border-radius: 8px;
    position: relative;
`;

export const SearchInput = styled.input`
    border: 2px solid #fff;
    border-radius: 8px;
    outline: none;
    background-color: transparent;
    color: #fff;
    padding: 5px 12px;
    font-size: 0.9rem;
    width: 0;
    opacity: 0;
    transition: width 0.3s ease, opacity 0.3s ease, padding 0.3s ease;

    ${SearchContainer}:hover &,
  &:focus {
        width: 250px;
        opacity: 1;
    }

    &[value]:not([value=""]),
    &.visible {
        width: 250px;
        opacity: 1;
    }
`;

export const SearchButton = styled.button`
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
