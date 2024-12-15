import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Organisms/Layout/Layout';
import Series from './Components/Pages/Series/Series';
import Movies from './Components/Pages/Movies/Movies';
import MyPage from './Components/Pages/Mypage/Mypage';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy/PrivacyPolicy';
import TermsofUse from './Components/Pages/TermsOfUse/TermsofUse';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Welcome from './Components/Sections/Welcome/Welcome'; 
import Recommendations from './Components/Sections/Recommendations/Recommendations'; 
import News from './Components/Sections/News/News'; 
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Testimonials from './Components/Sections/Testimonials/Testimonials';
import CallToAction from './Components/Sections/CTA/CallToAction';
import dummyArticles from './data/articles';
import FAQ from './Components/Sections/FAQ/FAQ';
import styles from './App.module.sass'; 
import TrendingNow from './Components/Sections/TrendingNow/TrendingNow';

const Home: React.FC = () => {
  return (
    <div className={styles.component_wrapper}>
      <Welcome />
      <Recommendations />
      <News articles={dummyArticles} />
      <TrendingNow />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/series' element={<Series />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/about-us' element={<AboutUs />} />
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