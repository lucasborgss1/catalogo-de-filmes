import styled from "styled-components";

interface InfoSectionProps {
    backgroundImage?: string;
}

export const InfoSection = styled.section<InfoSectionProps>`
    position: relative;
    width: 100%;
    min-height: 500px;
    background: ${({ backgroundImage }) =>
        backgroundImage
            ? `url('https://image.tmdb.org/t/p/original${backgroundImage}')`
            : "#000"};
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 0;
`;

export const InfosWrapper = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    color: white;
`;

export const DetailsWrapper = styled.div`
    max-width: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;

    h2 {
        font-size: 28px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        line-height: 1.5;
    }

    span {
        display: block;
        margin-top: 10px;
        font-weight: bold;
        color: #f1c40f;
    }
`;
