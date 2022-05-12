import "./App.css";
import React, { Component, useCallback } from "react";
import PokeApi from "./Components/PokeApi";
import axios from "axios";
import StatsView from "./Components/StatsView";
import Pokemon from "./Components/Pokemon";
import { UseState } from "react";
import { render } from "@testing-library/react";

export const App = (props) => {
  const [pokemonSearched, setpokemonSearched] = React.useState(false); //hook estado
  const [userInput, setuserInput] = React.useState("");
  const [userSearch, setuserSearch] = React.useState({}); //same as "this.setState({ })"
  const [Loading, setloading] = React.useState(false);
  const [error, setError] = React.useState("");

  function inputPokemon(input) {
    setuserInput(input);
  }

  function searchPokemon() {
    setError("");
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
      .then((res) => {
        setuserSearch({
          name: res.data.species.name,
          img: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type: res.data.types[0].type.name,
        });
        setpokemonSearched(true);
        setuserInput("");
      })
      .catch((res) => {
        setloading(true);
        setError("Pokemon no encontrado");
      });
  }

  function goBackButton() {
    setpokemonSearched(false);
  }

  return (
    //Main Screen
    <div className="Container">
      <div className="Banner">
        <div className="header">
          <img
            src="http://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
            height="50px" /*alto */
            width="50px"
          />
        </div>
        <h1 className="Tahoma"> React Pokédex </h1>
        <input
          placeholder="Seach for a Pókemon"
          className="SearchField"
          value={userInput}
          onChange={(e) => inputPokemon(e.target.value)}
        />
        <button
          className="btn-search"
          onClick={(e) => searchPokemon(setuserInput)}
        >
          {" "}
          Search
        </button>
        {error && (
          <div>
            <span className="modal">{error}</span>
          </div>
        )}
      </div>

      {pokemonSearched ? (
        <>
          <div>
            <StatsView
              pokeName={userSearch["name"].toUpperCase()} // props
              pokeImage={userSearch["img"]}
              type={userSearch["type"]}
              name={userSearch["name"]}
              img={userSearch["img"]}
              hp={userSearch["hp"]}
              attack={userSearch["attack"]}
              defense={userSearch["defense"]}
              ButtonGoBack={pokemonSearched}
              onClick={() => this.onPokeCardClick()}
            />
          </div>
          <div>
            <button className="GoBackButton" onClick={() => goBackButton()}>
              {" "}
              Go Back
            </button>
          </div>
        </>
      ) : (
        <PokeApi />
      )}
    </div>
  );
};

export default App;
