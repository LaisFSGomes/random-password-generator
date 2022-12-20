import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Home } from 'features/Home';
import React from 'react';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar />
      <Home />
      <Footer />
    </div>
  );
};
