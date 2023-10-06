import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({collection, query}) {

  const filteredCollection = collection.filter(pokemon => pokemon.name.startsWith(query.toLowerCase()));
  
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {filteredCollection.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} front={pokemon.sprites.front} back={pokemon.sprites.back} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
