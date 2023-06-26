
import React from "react"
import "./App.css"
import Navbar from "./components/navbar/navbar";
import {action,originals,romantic} from "./constants/urls"
import Banner from "./components/navbar/banner/banner";
import Rowpost from "./components/Rowpost/Rowpost";








function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix Originals"/>
      <Rowpost url={action} title="Actions" isSmall/>
      <Rowpost url={romantic} title="Romantic" isSmall/>

      
    </div>
  );
}

export default App;
