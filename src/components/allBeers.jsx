import headerImg from '../assets/header.png'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Beers() {
  const [beers, setBeers] = useState([]);
  const fetchBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers");
      const beerData = response.data;
      setBeers(beerData);
    } catch (error) {
      console.error("Error fetching beers:", error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      <h3>Beer Lists</h3>
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Beers;
