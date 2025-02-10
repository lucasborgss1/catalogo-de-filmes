import styled from "styled-components";

export const SectionMovieList = styled.section`
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;
    z-index: 3;

    .swiper-slide {
        transition: all 0.3s ease;
    }

    .swiper-slide:not(.swiper-slide-active) {
        transform: scale(0.7);
    }
`;

export const LoadingIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    color: #f1c40f;
`;
