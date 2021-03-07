import './App.css';
import About from './Components/About';
import Download from './Components/Download';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <About/>
      <Features/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
