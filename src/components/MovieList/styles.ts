import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";

export const SectionMovieList = styled.section`
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;

    .swiper-slide {
        transition: all 0.3s ease;
    }

    .swiper-slide:not(.swiper-slide-active) {
        opacity: 0.7;
        transform: scale(0.7);
    }

    .swiper-slide-active {
        opacity: 1;
    }
`;
