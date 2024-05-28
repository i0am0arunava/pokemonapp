// src/PokemonCard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching the Pokémon details:', error);
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  if (!pokemonData) return <div>Loading...</div>;

  return (

    <div className="pokemon-card">
      <h3>{pokemonData.name}</h3>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
    </div>
   
  );
};

export default PokemonCard;
