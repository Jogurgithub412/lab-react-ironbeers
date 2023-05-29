import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/allBeers";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<Beers/>} />
        <Route path="/newBeer" element={<newBeer/>} />
        <Route path= "/randomBeer" element={<randomBeer/>}/>  
    </Routes>
    </div>
  );
}

export default App;
