import React, { useEffect, useState, useRef } from "react";
import { fetchTrendingMovies } from "../../assets/services/movies";
import { MovieCard } from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import * as S from "./styles";
import { MovieInfos } from "../MovieInfos/MovieInfos";

export interface MovieProps {
    id: number;
    media_type: string;
    backdrop_path: string;
    poster_path: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    vote_average: number;
    vote_count: number;

    title?: string;
    name?: string;
    original_title?: string;
    original_name?: string;
    overview?: string;
    release_date?: string;
    first_air_date?: string;
}

export const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieOnFocus, setMovieOnFocus] = useState<MovieProps | null>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data.results);
                setMovieOnFocus(data.results[0]);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, []);

    const handleSlideClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
        setMovieOnFocus(movies[index]);
    };

    if (loading) {
        return <p>Carregando</p>;
    }

    return (
        <>
            <MovieInfos movie={movieOnFocus} />
            <S.SectionMovieList>
                <Swiper
                    speed={800}
                    loop={true}
                    loopAdditionalSlides={4}
                    modules={[A11y]}
                    spaceBetween={0}
                    slidesPerView={10}
                    watchSlidesProgress={true}
                    centeredSlides={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={() => console.log(movieOnFocus)}
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide
                            key={movie.id}
                            onClick={() => handleSlideClick(index)}
                        >
                            <MovieCard
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                title={movie.title || movie.name}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.SectionMovieList>
        </>
    );
};
