import React from "react";
import { Link } from "react-router-dom"; // Importando Link do React Router
import { IoIosSearch } from "react-icons/io";
import * as S from "./styles";

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.HeaderWrapper>
                <S.Logo>
                    <span>CINE</span> VERSE
                </S.Logo>
                <S.NavList>
                    <S.List>
                        <S.ListItem>
                            <Link to="/">
                                <S.ListItemAdress>CineVerse</S.ListItemAdress>
                            </Link>
                        </S.ListItem>
                        <S.ListItem>
                            <Link to="/movies">
                                <S.ListItemAdress>Movie</S.ListItemAdress>
                            </Link>
                        </S.ListItem>
                        <S.ListItem>
                            <Link to="/tv">
                                <S.ListItemAdress>TV Series</S.ListItemAdress>
                            </Link>
                        </S.ListItem>
                        <S.ListItem>
                            |
                            <S.SearchButton>
                                <IoIosSearch />
                            </S.SearchButton>
                        </S.ListItem>
                    </S.List>
                </S.NavList>
            </S.HeaderWrapper>
        </S.StyledHeader>
    );
};
