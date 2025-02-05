import React, { useEffect, useState } from "react";
import { MovieProps } from "../MovieList/MovieList";
import * as S from "./styles";
import {
    fetchMovieImages,
    fetchTvSeriesImages,
} from "../../assets/services/movies";

interface MovieInfoProps {
    movie: MovieProps | null;
}

interface ImgProps {
    aspect_ratio: number;
    height: number;
    iso_639_1: string | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export const MovieInfos: React.FC<MovieInfoProps> = ({ movie }) => {
    const [img, setImg] = useState<ImgProps | null>(null);

    useEffect(() => {
        if (!movie) return;

        const getImages = async () => {
            if (movie.media_type === "movie") {
                try {
                    const data = await fetchMovieImages(movie.id);
                    setImg(data[Math.floor(Math.random() * 11)]);
                } catch (error) {
                    console.error("Erro ao buscar imagens:", error);
                }
            } else {
                try {
                    const data = await fetchTvSeriesImages(movie.id);
                    setImg(data[0]);
                } catch (error) {
                    console.error("Erro ao buscar imagens:", error);
                }
            }
        };

        getImages();
    }, [movie]);

    return (
        <S.InfoSection
            backgroundImage={`https://image.tmdb.org/t/p/original${img?.file_path}`}
        >
            <S.GradientOverlay />
            <S.InfosWrapper>
                <S.DetailsWrapper>
                    <h2>{movie?.title || movie?.name}</h2>
                    <p>{movie?.overview || "Descrição não disponível."}</p>
                    <span>
                        Lançamento:{" "}
                        {movie?.release_date || movie?.first_air_date}
                    </span>
                </S.DetailsWrapper>
            </S.InfosWrapper>
        </S.InfoSection>
    );
};
