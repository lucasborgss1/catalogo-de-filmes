import React, { useEffect, useState, useRef } from "react";
import { fetchData, fetchTrailers } from "../../assets/services/data";
import { MovieCard } from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import * as S from "./styles";
import { MovieInfos } from "../MovieInfos/MovieInfos";
import { ColorRing } from "react-loader-spinner";

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

interface FetchType {
    type: string;
}

export const MovieList: React.FC<FetchType> = ({ type }) => {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieOnFocus, setMovieOnFocus] = useState<MovieProps | null>(null);
    const [trailer, setTrailer] = useState<string | null>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                setLoading(true);
                const data = await fetchData(type);
                setMovies(data.results);
                setMovieOnFocus(data.results[0]);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, [type]);

    useEffect(() => {
        const getTrailer = async () => {
            if (movieOnFocus) {
                try {
                    const data = await fetchTrailers(
                        movieOnFocus.media_type,
                        movieOnFocus.id
                    );
                    setTrailer(data[0].key);
                } catch (err) {
                    console.log(err);
                    setTrailer(null);
                }
            }
        };

        getTrailer();
    }, [movieOnFocus]);

    const handleSlideClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
        setMovieOnFocus(movies[index]);
    };

    if (loading) {
        return (
            <S.LoadingIcon>
                <ColorRing
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={[
                        "#E1B300",
                        "#D9A404",
                        "#C89600",
                        "#AF7E00",
                        "#8F5E00",
                    ]}
                />
            </S.LoadingIcon>
        );
    }

    if (movieOnFocus) {
        return (
            <>
                <MovieInfos movie={movieOnFocus} trailer={trailer} />
                <S.SectionMovieList>
                    <Swiper
                        speed={500}
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
                        onSlideChange={() => console.log(movieOnFocus, trailer)}
                        simulateTouch={false}
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
    }
};
