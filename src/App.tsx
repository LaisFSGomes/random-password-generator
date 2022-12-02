import { AppBarr } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Home } from 'features/Home';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBarr />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
