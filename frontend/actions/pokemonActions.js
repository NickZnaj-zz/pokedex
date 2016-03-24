var AppDispatcher = require("../dispatcher/dispatcher.js");
var pokemonConstants = require("../constants/pokemonConstants");


var pokemonActions = {
	receiveAllPokemon: function(pokemon) {
		var action = {
			actionType: pokemonConstants.POKEMON_RECEIVED,
			pokemon: pokemon
		};
		AppDispatcher.dispatch(action);
	},

	receiveSinglePokemon: function (pokemon) {
		var action = {
			actionType: pokemonConstants.MASTERBALL_THROWN,
			pokemon: pokemon
		};
		AppDispatcher.dispatch(action);
	}
};


module.exports = pokemonActions;
