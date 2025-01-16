import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { fetchTrendingMovies } from "../../assets/services/movies";
import { MovieCard } from "../MovieCard/MovieCard";

interface MovieProps {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: [number];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data.results);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, []);

    if (loading) {
        return <p>Carregando</p>;
    }

    return (
        <S.SectionMovieList>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <MovieCard
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            title={movie.title}
                        />
                    </li>
                ))}
            </ul>
        </S.SectionMovieList>
    );
};
