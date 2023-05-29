import Header from "https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/Admin/Desktop/Ironhack_student/projects/lab-react-ironbeers/src/assets/header.png?version%3D1685120572300./header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RandomBeer = () => {
    const [beer, setBeer] = useState([]);
  
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        const randomBeer = response.data;
        setBeer(randomBeer);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };
  
    if (!beer) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <Header/>
        <div>
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation level: {beer.attenuation_level}</p>
        <p>Description: {beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </div>
      </div>
    );
  };
  
  export default RandomBeer;