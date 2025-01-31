import React, { useEffect, useState, useRef } from "react";
import { fetchTrendingMovies } from "../../assets/services/movies";
import { MovieCard } from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import * as S from "./styles";

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
    const swiperRef = useRef<SwiperType | null>(null);

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

    const handleSlideClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };

    if (loading) {
        return <p>Carregando</p>;
    }

    return (
        <S.SectionMovieList>
            <Swiper
                speed={600}
                loop={true}
                loopAdditionalSlides={8}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={10}
                navigation
                watchSlidesProgress={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={() => console.log("slide change")}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide
                        key={movie.id}
                        onClick={() => handleSlideClick(index)}
                    >
                        <MovieCard
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            title={movie.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.SectionMovieList>
    );
};
