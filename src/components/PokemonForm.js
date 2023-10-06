import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setNewPokemon, newPokemon, onNewPokemonSubmit }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "frontUrl" || name === "backUrl") {
      setNewPokemon({
        ...newPokemon,
        sprites: {
          ...newPokemon.sprites,
          [name === "frontUrl" ? "front" : "back"]: value,
        },
      });
    } else {
      setNewPokemon({
        ...newPokemon,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={onNewPokemonSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={newPokemon.name}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={newPokemon.hp}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
