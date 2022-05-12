import React, { Component } from "react";
import axios from "axios";
import StatsView from "./StatsView";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    };
  }

  async componentDidMount() {
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150"
    );
    this.setState({
      pokemon: result.data["results"],
    });
  }

  render() {
    return (
      <div>
        {this.state.pokemon.map((pokemon) => (
          <Pokemon data={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
