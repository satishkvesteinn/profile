
import { useContext } from 'react';
import './App.css'
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Porfolio from './components/Porfolio/Porfolio';
import Service from './components/Service/Service';
import Testimonial from './components/Testimonial/Testimonial';
import Work from './components/Works/Work';
import Contact from './components/Contact/Contact';
import { themeContext } from './Context/Context';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{background: darkMode ? "black" : "",
    color: darkMode ? "white" : ""}}>
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Porfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
