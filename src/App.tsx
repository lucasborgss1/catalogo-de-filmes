import { Header } from "./components/Header/Header";
import { MovieList } from "./components/MovieList/MovieList";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
    return (
        <>
            <Header />
            <MovieList />
            <GlobalStyles />
        </>
    );
}

export default App;
