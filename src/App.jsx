import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/global/Header/Header'
import Footer from './components/global/Footer/Footer'
import Home from './components/home/Home';
import Professional from './components/professional/Professional';
import Education from './components/education/Education';
import Hobbies from './components/hobbies/Hobbies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/professional" element={<Professional />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/hobbies" element={<Hobbies />} />
          </Routes>
        <Footer />
      </Router>
      </ParallaxProvider>
    </div>
  );
}

export default App;
