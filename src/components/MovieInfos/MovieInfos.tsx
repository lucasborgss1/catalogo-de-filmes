import { useEffect, useState } from "react";
import { MovieProps } from "../MovieList/MovieList";
import * as S from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface MovieInfoProps {
    movie: MovieProps;
    trailer: string | null;
}

export const MovieInfos: React.FC<MovieInfoProps> = ({ movie, trailer }) => {
    const [background, setBackground] = useState<string | undefined>(
        movie?.backdrop_path
    );

    useEffect(() => {
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        img.onload = () => {
            setTimeout(() => {
                setBackground(movie.backdrop_path);
            }, 50);
        };
    }, [movie]);

    return (
        <S.InfoSection $backgroundImage={background}>
            <S.GradientOverlay />
            <S.InfosWrapper>
                <S.DetailsWrapper>
                    <h2>{movie?.title || movie?.name}</h2>
                    <S.SpanWrapper>
                        <span>
                            {Array.from({ length: 5 }).map((_, index) =>
                                index < Math.round(movie.vote_average / 2) ? (
                                    <AiFillStar key={index} />
                                ) : (
                                    <AiOutlineStar key={index} />
                                )
                            )}
                        </span>

                        <span>
                            {movie.first_air_date
                                ? new Date(
                                      movie.first_air_date
                                  ).toLocaleDateString("pt-BR")
                                : movie.release_date
                                ? new Date(
                                      movie.release_date
                                  ).toLocaleDateString("pt-BR")
                                : "Data indisponível"}
                        </span>
                    </S.SpanWrapper>

                    <p>{movie?.overview || "Descrição não disponível."}</p>
                    {trailer && (
                        <a
                            href={`https://www.youtube.com/watch?v=${trailer}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <S.TrailerButton>
                                <span>Assista</span> o trailer
                            </S.TrailerButton>
                        </a>
                    )}
                </S.DetailsWrapper>
            </S.InfosWrapper>
        </S.InfoSection>
    );
};
