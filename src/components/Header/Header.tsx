import React from "react";
import { IoIosSearch } from "react-icons/io";
import * as S from "./styles";
import { fetchTrendingMovies } from "../../assets/services/movies";

export const Header: React.FC = () => {
    fetchTrendingMovies();
    return (
        <S.StyledHeader>
            <S.HeaderWrapper>
                <S.Logo>
                    <span>NEW</span> MOVIE
                </S.Logo>
                <S.NavList>
                    <S.List>
                        <S.ListItem>
                            <S.ListItemAdress href="/">
                                New Movie
                            </S.ListItemAdress>
                        </S.ListItem>
                        <S.ListItem>
                            <S.ListItemAdress href="/">Genre</S.ListItemAdress>
                        </S.ListItem>
                        <S.ListItem>
                            <S.ListItemAdress href="/">
                                Country
                            </S.ListItemAdress>
                        </S.ListItem>
                        <S.ListItem>
                            <S.ListItemAdress href="/">Movie</S.ListItemAdress>
                        </S.ListItem>
                        <S.ListItem>
                            <S.ListItemAdress href="/">
                                TV Series
                            </S.ListItemAdress>
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
