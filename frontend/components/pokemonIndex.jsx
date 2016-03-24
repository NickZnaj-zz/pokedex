var React = require('react');
var ApiUtil = require('../util/apiUtil');
var PokemonCenter = require('../stores/pokemonCenter');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonIndex = React.createClass({
  getInitialState: function () {
		return {pokemon: []};
	},

	componentDidMount: function () {
    this.pokemonCenterToken = PokemonCenter.addListener(this.resetPokemon);
		ApiUtil.catchAllPokemon();
	},

	componentWillUnmount: function () {
		this.pokemonCenterToken.remove();
	},

	resetPokemon: function () {
    var newPokemon = PokemonCenter.all();
		this.setState({pokemon: newPokemon});
	},

	render: function () {
		var pokeList = this.state.pokemon.map(function (monster) {
      return <PokemonIndexItem key={monster.id} pokemon={monster} />;
		}.bind(this));
		return <div className="pokemon-index-pane">{pokeList}</div>;
	}
});

module.exports = PokemonIndex;
