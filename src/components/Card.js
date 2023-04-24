import React from "react";

const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};

const Card = ({pokemon}) => {
  return (
    <div className="card" style={{background: `radial-gradient(circle at 50% 0%, ${typeColor[pokemon.types[0].type.name]} 36%, #ffffff 36%)`}}>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={"image de "+ pokemon.name}  />
      <h2 className="poke-name">{pokemon.name.toUpperCase()}</h2>
    </div>
  );
};

export default Card;
