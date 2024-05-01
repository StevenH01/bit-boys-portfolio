import './App.css';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import NavBar from './component/NavBar';


function App() {
  let screen;
  switch(window.location.pathname) {
    case "/":
      screen = <HeroSection />
      break;
    // case "":
    //   screen = ;
    //   break;
    default:
      break;
  }
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
