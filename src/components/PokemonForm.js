import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setNewPokemon, newPokemon, onNewPokemonSubmit}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={onNewPokemonSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemon.name} onChange={(event) => setNewPokemon({...newPokemon, name: event.target.value})} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemon.hp} onChange={(event) => setNewPokemon({...newPokemon, hp: event.target.value})} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front} onChange={(event) => setNewPokemon({...newPokemon, sprites: {...newPokemon.sprites, front: event.target.value}})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back} onChange={(event) => setNewPokemon({...newPokemon, sprites: {...newPokemon.sprites, back: event.target.value}})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
