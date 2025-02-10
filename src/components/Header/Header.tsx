import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import * as S from "./styles";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isInputVisible, setIsInputVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            navigate(`/search?name=${trimmedQuery}`);
            setQuery("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <S.StyledHeader>
            <S.HeaderWrapper>
                <S.Logo>
                    <Link to="/">
                        <span>CINE</span> VERSE
                    </Link>
                </S.Logo>

                <S.NavList>
                    <S.List>
                        <S.ListItem to="/" end>
                            <S.ListItemAdress>CineVerse</S.ListItemAdress>
                        </S.ListItem>
                        <S.ListItem to="/movies">
                            <S.ListItemAdress>Filmes</S.ListItemAdress>
                        </S.ListItem>
                        <S.ListItem to="/tv">
                            <S.ListItemAdress>Séries</S.ListItemAdress>
                        </S.ListItem>
                    </S.List>

                    <S.SearchContainer
                        onMouseEnter={() => setIsInputVisible(true)}
                        onMouseLeave={() => {
                            if (!query) setIsInputVisible(false);
                        }}
                    >
                        <S.SearchInput
                            type="text"
                            placeholder="Filmes, Séries, Programas..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                            onBlur={() => {
                                if (!query) setIsInputVisible(false);
                            }}
                            style={{
                                width: isInputVisible || query ? "250px" : "0",
                                opacity: isInputVisible || query ? "1" : "0",
                                padding: isInputVisible || query ? "8px" : "0",
                            }}
                        />
                        <S.SearchButton onClick={handleSearch}>
                            <IoIosSearch />
                        </S.SearchButton>
                    </S.SearchContainer>
                </S.NavList>
            </S.HeaderWrapper>
        </S.StyledHeader>
    );
};
