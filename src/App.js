import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

import Transfrom from "./components/transform/Transfrom";
import StandOut from "./components/standOut/StandOut";
import GraphicDesign from "./components/graphicDesign/GraphicDesign";
import Photography from "./components/photography/Photography";

function App() {
  return (
    <div className="App">
      <div className="navAndHeaderContainer">
        <Navbar />
        <Header />
      </div>
      <div className="mainContent">
        <Transfrom />
        <StandOut />
        <div className="designPhotography">
          <GraphicDesign />
          <Photography />
        </div>
      </div>
    </div>
  );
}

export default App;
