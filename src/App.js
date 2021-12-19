import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
