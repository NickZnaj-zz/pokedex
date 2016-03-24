var pokemonActions = require("../actions/pokemonActions");

var ApiUtil = {
	catchAllPokemon: function(){
		$.ajax({
			type: "GET",
			url: "/api/pokemon",
			dataType: "json",
			success: function (pokemon) {
				pokemonActions.receiveAllPokemon(pokemon);
			}
		});
	},

	masterball: function (id) {
		$.ajax({
			type: "GET",
			url: "/api/pokemon/" + id,
			dataType: "json",
			success: function (pokemon) {
				pokemonActions.receiveSinglePokemon(pokemon);
			}
		});
	}
};

module.exports = ApiUtil;
