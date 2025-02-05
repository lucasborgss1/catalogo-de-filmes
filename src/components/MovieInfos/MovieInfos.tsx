import { MovieProps } from "../MovieList/MovieList";
import * as S from "./styles";

interface MovieInfoProps {
    movie: MovieProps;
}

export const MovieInfos: React.FC<MovieInfoProps> = ({ movie }) => {
    return (
        <S.InfoSection $backgroundImage={movie?.backdrop_path}>
            <S.GradientOverlay />

            <S.InfosWrapper>
                <S.DetailsWrapper>
                    <h2>{movie?.title || movie?.name}</h2>
                    <p>{movie?.overview || "Descrição não disponível."}</p>
                    <span>
                        Avaliação:
                        {movie.vote_average === 0
                            ? " Não disponível"
                            : " " + Math.round(movie.vote_average)}
                        {}
                    </span>
                    <br />
                    <span>
                        Data de lançamento:{" "}
                        {movie.first_air_date || movie.release_date}
                    </span>
                </S.DetailsWrapper>
            </S.InfosWrapper>
        </S.InfoSection>
    );
};
