import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <div className="navAndHeaderContainer">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
