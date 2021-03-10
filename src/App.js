import './App.css';
import Header from './components/Header.js';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import Booking from './components/Booking';
import Specialties from './components/Specialties';
import Events from './components/Events';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <AboutUs></AboutUs>
      <Team></Team>
      <Booking></Booking>
      <Specialties></Specialties>
      <Menu></Menu>
      <Events></Events>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
