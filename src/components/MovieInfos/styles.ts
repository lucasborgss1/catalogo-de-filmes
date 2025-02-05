import styled from "styled-components";

interface InfoSectionProps {
    $backgroundImage?: string; // Use transient prop
}

export const InfoSection = styled.section<InfoSectionProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 633px;
    background: ${({ $backgroundImage }) =>
        $backgroundImage
            ? `url('https://image.tmdb.org/t/p/original${$backgroundImage}')`
            : "#000"};
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    padding: 20px;
    position: relative;
`;

export const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 25%,
        rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
`;

export const InfosWrapper = styled.div`
    max-width: 40%;
    display: flex;
    color: white;
    z-index: 2;
`;

export const DetailsWrapper = styled.div`
    padding: 20px;
    border-radius: 10px;

    h2 {
        font-size: 28px;
        margin-bottom: 10px;
    }

    p {
        text-align: justify;
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 10px;
    }

    span {
        margin-top: 10px;
        font-size: 0.9rem;
        font-weight: bold;
        color: #f1c40f;
    }
`;
