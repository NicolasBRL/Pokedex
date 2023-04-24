import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const PokemonList = () => {
  // Déclare une nouvelle variable d'état
  const [pokemons, setPokemons] = useState([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=9").then((res) => {
      for (let i = 0; i < res.data.results.length; i++) {
        axios
          .get(res.data.results[i].url)
          .then((result) =>
            setPokemons((prevArray) => [...prevArray, result.data])
          );
      }
    });
  }, []);

  return (
    <div>
      <div className="card-container">
        {pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
