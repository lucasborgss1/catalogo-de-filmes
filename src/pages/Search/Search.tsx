import React from "react";
import { useLocation } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";

export const Search: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");

    if (!name) {
        return <div>Nenhum termo de busca fornecido.</div>;
    }

    return <MovieList query={name} />;
};
