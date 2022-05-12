import axios from "axios";
import React from "react";
import StatsView from "./StatsView";
//CARTA POKEMONES CON FONDO MAIN VIEW
export const Pokemon = (props) => {
  const [pokemon, setPokemon] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);
  const [pokemontype, setPokemontype] = React.useState(""); //same as "this.setState({ })"
  const [cardClicked, setCardClicked] = React.useState(false);
  const pokemon_type = {};

  React.useEffect(async () => {
    await axios.get(props.data.url).then((response) => {
      setPokemon(response.data);
      setLoading(false);
      const pokemontype = response.data.types[0].type.name;
      setPokemontype(pokemontype);
    });
  }, [setPokemon]); //regresa setpokemon

  if (pokemontype == "normal") {
    pokemon_type.normal = "#c793d1";
  } else if (pokemontype == "fire") {
    pokemon_type.fire = "#e60000";
  } else if (pokemontype == "grass") {
    pokemon_type.grass = "#85e085";
  } else if (pokemontype == "water") {
    pokemon_type.water = "#b3d9ff";
  } else if (pokemontype == "poison") {
    pokemon_type.poison = "#a300cc";
  } else if (pokemontype == "bug") {
    pokemon_type.bug = "#77A06D";
  } else if (pokemontype == "ground") {
    pokemon_type.ground = "#d9b38c";
  } else if (pokemontype == "fairy") {
    pokemon_type.fairy = "#ff66a3";
  } else if (pokemontype == "fighting") {
    pokemon_type.fighting = "#F89A37";
  } else if (pokemontype == "psychic") {
    pokemon_type.psychic = "#eaea7b";
  } else if (pokemontype == "rock") {
    pokemon_type.rock = "#d9b38c";
  } else if (pokemontype == "electric") {
    pokemon_type.electric = "#E6E865";
  } else if (pokemontype == "ghost") {
    pokemon_type.ghost = "#8600b3";
  } else if (pokemontype == "ice") {
    pokemon_type.ice = "#66b3ff";
  } else if (pokemontype == "dragon") {
    pokemon_type.dragon = "#ffb3b3";
  }

  if (isLoading) {
    return <div className="letters"> Loading . . . </div>;
  }

  //ALL POKEMON CARDS FROM MAIN VIEW
  return (
    <div className="cardsContainer">
      <div className="pokeCard" onClick={() => setCardClicked(true)}>
        <div
          style={{
            backgroundColor: pokemon_type[pokemontype],
            borderRadius: "10px",
          }}
        >
          <img
            src={pokemon.sprites.front_default}
            height="250px" /*alto */
            width="250px"
          />
        </div>
        <div className="pokemonName">{pokemon.name.toUpperCase()}</div>
        <div
          className="pokemonType"
          style={{ color: pokemon_type[pokemontype] }}
        >
          {" "}
          {pokemon.types[0].type.name}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

//    if (cardClicked) {
//        <></>
//      MAIN VIEW OF POKEMON CARD STATS
//       return <div className="cardsContainer">
//                 <div className="pokeCard">
//                     <div className="pokemonStats"
//                          style={{backgroundColor: pokemon_type[pokemontype]}}> POKEMON STATS </div>
//                     <ul>
//                         <li><a className="statsLetters">Namee:</a> {pokemon.name}</li>
//                         <li><a className="statsLetters">Type:</a>{pokemon.types[0].type.name}</li>
//                         <li><a className="statsLetters">Attack:</a>{pokemon.stats[1].base_stat}</li>
//                         <li><a className="statsLetters">Defense:</a>{pokemon.stats[2].base_stat}</li>
//                         <li><a className="statsLetters">HP:</a>{pokemon.stats[0].base_stat}</li>
//                     </ul>
//                     </div>
//                 </div>

//    }
//    else {
