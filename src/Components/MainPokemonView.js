import { render } from "@testing-library/react";
import React, { Component } from 'react';

class MainPokemonView extends React.Component {

    render() {
        const pokeName = this.props.pokeName;
        const pokeImage = this.props.pokeImage;
        const type = this.props.type;

        return (
            <div className="pokeCard"
                onClick={(e) => this.onPokeCardClick(e.target.value)}
            >
                <div className="pokeInfo">
                    <img
                        src={pokeImage}
                        height="250px" /*alto */
                        width="250px"
                    />
                </div>
                <div className="pokemonName">{this.pokeName}</div>
                <div className="pokemonName">a
                {type} </div>


            </div>
        )
    }
}
export default MainPokemonView;