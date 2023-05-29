import React from "react";
import headerImg from '../assets/header.png'
import { Link } from "react-router-dom";
import allBeers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <div>
        <img src={allBeers} alt=""/>
        <Link to="/beers"><h2> All Beers</h2></Link>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta
          dolores culpa, consequatur ad, distinctio cupiditate dolorum, impedit
          alias maxime minima mollitia aperiam provident. Cum officiis quaerat
          repellat eaque facilis!
        </p>
      </div>

      <div>
        <img src={randomBeer} alt=""/>
        <Link to="/random-beer"><h2> Random Beers</h2> </Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta dolores culpa, consequatur ad, distinctio cupiditate dolorum, impedit alias maxime minima mollitia aperiam provident. Cum officiis quaerat repellat eaque facilis!</p>
        </div>

        <div>
        <img src={newBeer} alt=""/>
        <Link to="/new-beer"><h2> New Beers </h2></Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta dolores culpa, consequatur ad, distinctio cupiditate dolorum, impedit alias maxime minima mollitia aperiam provident. Cum officiis quaerat repellat eaque facilis!</p>
        </div>
      </div>
  );
}
 
export default Home;