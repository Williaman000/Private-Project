import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Organisms/Layout/Layout";
import Series from "./Components/Pages/Series/Series";
import Movies from "./Components/Pages/Movies/Movies";
import MyPage from "./Components/Pages/Mypage/Mypage";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy/PrivacyPolicy";
import TermsofUse from "./Components/Pages/TermsOfUse/TermsofUse";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Welcome from "./Components/Sections/Welcome/Welcome";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Testimonials from "./Components/Sections/Testimonials/Testimonials";
import CallToAction from "./Components/Sections/CTA/CallToAction";
import FAQ from "./Components/Sections/FAQ/FAQ";
import TrendingMovies from "./Components/Sections/TrendingMovies/TrendingMovies";
import NotFound from "./Components/Pages/NotFound/NotFound";
import styles from "./App.module.sass";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { RecommendationProvider } from "./Contexts/RecommendationContext";
import { FavoritesProvider } from "./Contexts/FavoritesContext";
import NowPlaying from "./Components/Sections/NowPlaying/NowPlaying";
import SearchAndFilter from "./Components/Sections/SearchAndFilter/SearchAndFilter";
import SearchResults from "./Components/Pages/SearchResults/SearchResults";
import MovieDetails from "./Components/Pages/MovieDetails/MovieDetails";
import Favorites from "./Components/Pages/Favorites/Favorites";
import MoviesByCategory from "./Components/Pages/MoviesByCategory/MoviesByCategory";
import SeriesDetails from "./Components/Pages/SeriesDetails/SeriesDetails";

const Home: React.FC = () => {
  return (
    <div className={styles.component_wrapper}>
      <Welcome />
      <SearchAndFilter />
      <NowPlaying />
      <TrendingMovies />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RecommendationProvider>
        <FavoritesProvider>
          <div className={styles.app}>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/series" element={<Series />} />
                  <Route path="/series/:id" element={<SeriesDetails />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-use" element={<TermsofUse />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route
                    path="/movies/:genreId"
                    element={<MoviesByCategory />}
                  />
                </Routes>
              </Layout>
            </Router>
          </div>
        </FavoritesProvider>
      </RecommendationProvider>
    </ThemeProvider>
  );
};

export default App;
