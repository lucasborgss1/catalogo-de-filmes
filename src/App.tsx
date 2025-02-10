import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { CineVerse } from "./pages/CineVerse/CineVerse";
import { TvSeries } from "./pages/TvSeries/TvSeries";
import { Movies } from "./pages/Movies/Movies";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<CineVerse />} />

                <Route path="/tv" element={<TvSeries />} />

                <Route path="/movies" element={<Movies />} />
            </Routes>
        </Router>
    );
}

export default App;
