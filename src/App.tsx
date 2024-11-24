import React from 'react';
import './App.module.sass';
import Layout from './Components/Organisms/Layout/Layout'

const App: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to Netflix Clone</h1>
      <p>Enjoy your favorite movies and series.</p>
    </Layout>
  );
};

export default App;
