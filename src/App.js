import "./App.css";
import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer";

import AlexSection from "./component/alex/AlexSection";
import AngeloSection from "./component/angelo/AngeloSection";
import DannySection from "./component/danny/DannySection";
import HenrySection from "./component/henry/HenrySection";
import JohnSection from "./component/john/JohnSection";
import KevinSection from "./component/kevin/KevinSection";
import SamuelSection from "./component/samuel/SamuelSection";
import StevenSection from "./component/steven/StevenSection";

function App() {
  let screen;
  switch (window.location.pathname) {
    case "/":
      screen = <HeroSection />;
      break;
    case "/alex":
      screen = <AlexSection />;
      break;
    case "/angelo":
      screen = <AngeloSection />;
      break;
    case "/danny":
      screen = <DannySection />;
      break;
    case "/henry":
      screen = <HenrySection />;
      break;
    case "/jonathan":
      screen = <JohnSection />;
      break;
    case "/kevin":
      screen = <KevinSection />;
      break;
    case "/samuel":
      screen = <SamuelSection />;
      break;
    case "/steven":
      screen = <StevenSection />;
      break;
    default:
      break;
  }
  return (
    <>
      <NavBar />
      {screen}
      <Footer />
    </>
  );
}

export default App;
