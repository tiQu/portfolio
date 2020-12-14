import './App.scss';
import Main from './components/global/Main/Main';
import Header from './components/global/Header/Header'
import Footer from './components/global/Footer/Footer'
import Home from './components/home/Home';
import Professional from './components/professional/Professional';
import Education from './components/education/Education';
import Hobbies from './components/hobbies/Hobbies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/professional" component={Professional} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/hobbies" component={Hobbies} />
          </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
