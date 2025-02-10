import styled from "styled-components";

interface InfoSectionProps {
    $backgroundImage?: string;
}

export const InfoSection = styled.section<InfoSectionProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 633px;
    position: relative;
    padding: 20px;
    background: ${({ $backgroundImage }) =>
        $backgroundImage
            ? `url('https://image.tmdb.org/t/p/original${$backgroundImage}')`
            : "#000"};
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    transition: background-image 0.5s ease-in-out, filter 0.5s ease-in-out;
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
        margin-right: 10px;
    }

    p {
        max-height: 250px;
        padding-right: 10px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #ddd transparent;

        text-align: justify;
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
    }
`;

export const TrailerButton = styled.button`
    align-items: center;
    padding-right: 10px;

    display: flex;
    position: relative;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    background-color: transparent;
    overflow: hidden;
    color: #f1c40f;
    transition: color 0.3s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background-color: #f1c40f;
        transition: width 0.4s ease-in-out;
        z-index: -1;
    }

    &:hover {
        color: black;
    }

    &:hover::before {
        width: 100%;
    }

    span {
        display: flex;
        border-radius: 8px;
        padding: 10px 5px;
        padding-right: 2.5px;
        background-color: #f1c40f;
        color: black;
    }
`;

export const SpanWrapper = styled.div`
    display: flex;
    width: auto;
    justify-content: space-between;
    text-align: center;

    span {
        font-size: 0.9rem;
        font-weight: bold;
        color: #f1c40f;
    }
    margin-bottom: 10px;
`;
