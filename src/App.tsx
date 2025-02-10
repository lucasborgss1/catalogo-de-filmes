import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { CineVerse } from "./pages/CineVerse/CineVerse";
import { TvSeries } from "./pages/TvSeries/TvSeries";
import { Movies } from "./pages/Movies/Movies";
import { Search } from "./pages/Search/Search";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<CineVerse />} />

                <Route path="/tv" element={<TvSeries />} />

                <Route path="/movies" element={<Movies />} />

                <Route path="/search" element={<Search />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
