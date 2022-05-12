import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PokeApi from "./PokeApi";
import { UseState } from "react";

//POKEMON STATS VIEW
class StatsView extends React.Component {
  //class component
  constructor(props) {
    super(props);
    this.state = {
      userClicked: false,
      pokeCardClicked: false,
    };
  }

  onPokeCardClick = (e) => {
    this.setState({
      pokeCardClicked: true,
    });
  };

  BackButton = (e) => {
    this.setState({
      pokeCardClicked: false,
    });
  };

  //PokeCard update
  render() {
    //const [cardClicked, setCardClicked] = useState(false); //como que estas madres se enlazan, deben estar declarada en ambos componentes
    const pokeName = this.props.pokeName;
    const pokeURL = this.props.pokeURL;
    const pokeImage = this.props.pokeImage;
    const type = this.props.type;
    const attack = this.props.attack; //guardar props en una constante
    const defense = this.props.defense;
    const img = this.props.img;
    const hp = this.props.hp;
    const poketype = {};

    if (type == "normal") {
      poketype.normal = "#c793d1";
    } else if (type == "fire") {
      poketype.fire = "#e60000";
    } else if (type == "grass") {
      poketype.grass = "#85e085";
    } else if (type == "water") {
      poketype.water = "#b3d9ff";
    } else if (type == "poison") {
      poketype.poison = "#a300cc";
    } else if (type == "bug") {
      poketype.bug = "#77A06D";
    } else if (type == "ground") {
      poketype.ground = "#d9b38c";
    } else if (type == "fairy") {
      poketype.fairy = "#ff66a3";
    } else if (type == "fighting") {
      poketype.fighting = "#F89A37";
    } else if (type == "PSYCHIC") {
      poketype.psychic = "#eaea7b";
    } else if (type == "ROCK") {
      poketype.rock = "#d9b38c";
    } else if (type == "electric") {
      poketype.electric = "#E6E865";
    } else if (type == "ghost") {
      poketype.ghost = "#8600b3";
    } else if (type == "ice") {
      poketype.ice = "#66b3ff";
    } else if (type == "dragon") {
      poketype.dragon = "#ffb3b3";
    }
    //cardsContainer in first div
    return (
      <>
        {this.state.pokeCardClicked ? ( //true if clicked in pokemoncard
          <div className="paddingCards">
            <div className="statsContainer">
              <div
                className="PokemonBackground"
                style={{ backgroundColor: poketype[type] }}
              >
                <img src={pokeImage} height="250px" /*alto */ width="250px" />
              </div>
              <div className="stats">
                <div className="pokemonStats">POKEMON STATS</div>
                <div className="whiteBackground">
                  <div className="statsLetters">Name: {pokeName}</div>
                  <div className="statsLetters">Type: {type}</div>
                  <div className="statsLetters">Attack: {attack}</div>
                  <div className="statsLetters">Defense: {defense}</div>
                  <div className="statsLetters">HP: {hp}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          //   </div>
          //POKEMON CARD SEARCHED
          <div className="paddingCards">
            <div className="statsContainer">
              <div
                className="pokeCard"
                onClick={(e) => this.onPokeCardClick(e.target.value)}
              >
                <div
                  style={{
                    backgroundColor: poketype[type],
                    borderRadius: "10px",
                  }}
                >
                  <img src={pokeImage} height="250px" /*alto */ width="250px" />
                </div>
                <div className="pokemonName">{pokeName}</div>
                <div className="pokemonType" style={{ color: poketype[type] }}>
                  {type}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default StatsView;
