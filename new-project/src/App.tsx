import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Organisms/Layout/Layout';
import Series from './Components/Pages/Series/Series';
import Movies from './Components/Pages/Movies/Movies';
import MyPage from './Components/Pages/Mypage/Mypage';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy/PrivacyPolicy';
import TermsofUse from './Components/Pages/TermsOfUse/TermsofUse';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import styles from './App.module.sass'; // 스타일 import

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={
                <div>
                  <div className={styles.welcome}>
                    <h1>Welcome to WillAn world</h1>
                    <p>Explore Series, Movies, and more!</p>
                  </div>
                  <section className={styles.recommendations}>
                    <h2>Recommended for You</h2>
                    <div className={styles.contentGrid}>
                      <div className={styles.card}>
                        <h3>Popular Series</h3>
                        <p>Explore top-rated series like "Breaking Bad" and "Stranger Things".</p>
                      </div>
                      <div className={styles.card}>
                        <h3>Trending Movies</h3>
                        <p>Watch blockbuster hits like "Inception" and "Interstellar".</p>
                      </div>
                    </div>
                  </section>
                </div>
              }
            />
            <Route path='/series' element={<Series />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-use' element={<TermsofUse />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
