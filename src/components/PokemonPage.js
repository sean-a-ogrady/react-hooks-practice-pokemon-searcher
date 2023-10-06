import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [collection, setCollection] = useState([]);
  const [query, setQuery] = useState("");
  const [newPokemon, setNewPokemon] = useState({
    id: Math.max(...collection.map(pokemon => pokemon.id)) + 1,
    name: "MissingNo.",
    hp: 33,
    sprites : {
      front: "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png",
      back: "https://archives.bulbagarden.net/media/upload/archive/9/98/20150303195027%21Missingno_RB.png"
    }
  });

  useEffect(() =>
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(setCollection), []);

  function onNewPokemonSubmit(event){
    event.preventDefault();
    setCollection([...collection, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setNewPokemon={setNewPokemon} newPokemon={newPokemon} onNewPokemonSubmit={onNewPokemonSubmit} />
      <br />
      <Search setQuery={setQuery} query={query} />
      <br />
      <PokemonCollection collection={collection} query={query} />
    </Container>
  );
}

export default PokemonPage;
