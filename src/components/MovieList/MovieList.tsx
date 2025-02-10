import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Importe useNavigate
import {
    fetchAll,
    fetchSearch,
    fetchTrailers,
} from "../../assets/services/data";
import { MovieCard } from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

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
    type?: string;
    query?: string;
}

export const MovieList: React.FC<FetchType> = ({ type, query }) => {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieOnFocus, setMovieOnFocus] = useState<MovieProps | null>(null);
    const [trailer, setTrailer] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [countdown, setCountdown] = useState<number>(5);
    const [isSliding, setIsSliding] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = query
                    ? await fetchSearch(query)
                    : type
                    ? await fetchAll(type)
                    : null;

                if (data?.results?.length) {
                    setMovies(data.results);
                    setMovieOnFocus(data.results[0]);
                } else {
                    setMovies([]);
                    setMovieOnFocus(null);
                    setError("Nenhum filme ou série encontrado.");
                    startCountdown();
                }
            } catch (err) {
                console.error(err);
                setError(
                    "Ocorreu um erro ao carregar os filmes. Tente novamente."
                );
                startCountdown();
            } finally {
                setLoading(false);
            }
        };

        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, type]);

    useEffect(() => {
        if (!movieOnFocus) {
            setTrailer(null);
            return;
        }

        let isMounted = true;

        const getTrailer = async () => {
            try {
                const data = await fetchTrailers(
                    movieOnFocus.media_type,
                    movieOnFocus.id
                );
                if (isMounted) {
                    setTrailer(data[0]?.key || null);
                }
            } catch (err) {
                console.log(err);
                if (isMounted) setTrailer(null);
            }
        };

        getTrailer();

        return () => {
            isMounted = false;
        };
    }, [movieOnFocus]);

    const handleSlideClick = (index: number) => {
        if (!isSliding && swiperRef.current) {
            setIsSliding(true);
            swiperRef.current.slideToLoop(index);
            setMovieOnFocus(movies[index]);
        }
    };

    const startCountdown = () => {
        setCountdown(3);
        let timeLeft = 3;

        const interval = setInterval(() => {
            timeLeft -= 1;
            setCountdown(timeLeft);

            if (timeLeft === 0) {
                clearInterval(interval);
                navigate("/");
            }
        }, 1000);

        return () => clearInterval(interval);
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

    if (error) {
        return (
            <S.ErrorMessage>
                {error} Redirecionando em {countdown}...
            </S.ErrorMessage>
        );
    }

    if (!movieOnFocus) {
        return (
            <S.ErrorMessage>
                Nenhum filme ou série em foco no momento. Redirecionando em
                {countdown}...
            </S.ErrorMessage>
        );
    }

    return (
        <>
            <MovieInfos movie={movieOnFocus} trailer={trailer} />
            <S.SectionMovieList>
                <Swiper
                    speed={500}
                    loop={true}
                    loopAdditionalSlides={4}
                    modules={[A11y, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    watchSlidesProgress={true}
                    watchOverflow={false}
                    centeredSlides={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    simulateTouch={true}
                    onSlideChange={() => setIsSliding(false)}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                        1440: {
                            slidesPerView: 8,
                        },
                    }}
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide
                            key={movie.id}
                            onClick={() => handleSlideClick(index)}
                        >
                            <MovieCard
                                src={movie.poster_path}
                                title={movie.title || movie.name}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.SectionMovieList>
        </>
    );
};
