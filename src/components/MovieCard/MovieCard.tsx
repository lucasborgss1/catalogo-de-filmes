import React from "react";
import * as S from "./styles";

interface MovieCard {
    src: string;
    title: string | undefined;
}

export const MovieCard: React.FC<MovieCard> = (movieCard) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <S.MovieCard>
                <S.MovieImg src={movieCard.src} alt={movieCard.title} />
            </S.MovieCard>
        </div>
    );
};
