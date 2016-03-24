var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var PokemonCenter = new Store(AppDispatcher);
var pokemonConstants = require("../constants/pokemonConstants");

var _pokemon = {};

var resetPokemon = function(pokemon){
	_pokemon = {};
	pokemon.forEach(function(monster){
		_pokemon[monster.id] = monster;
	});
};

var updatePokemon = function (pokemon) {
	_pokemon[pokemon.id] = pokemon;
};

PokemonCenter.all = function(){
	var all = [];

	for (var id in _pokemon) {
		if (_pokemon.hasOwnProperty(id)) {
			all.push(_pokemon[id]);
		}
	}
	return all;
};

PokemonCenter.find = function(id){
	return _pokemon[id];
};

PokemonCenter.__onDispatch = function(payload) {
	switch (payload.actionType) {
	case pokemonConstants.POKEMON_RECEIVED:
		resetPokemon(payload.pokemon);
		PokemonCenter.__emitChange();
		break;
	case pokemonConstants.MASTERBALL_THROWN:
    updatePokemon(payload.pokemon);
		PokemonCenter.__emitChange();
		break;
	}
};


module.exports = PokemonCenter;
