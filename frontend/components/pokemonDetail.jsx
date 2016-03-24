var React = require('react');
var PokemonCenter = require('../stores/pokemonCenter');
var ApiUtil = require('../util/apiUtil');
var ToyIndex = require('./toyIndex');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return { pokemon: this.getStateFromStore() };
	},

	getStateFromStore: function(){
		var idInt = parseInt(this.props.params.pokemonId);
		return PokemonCenter.find(idInt);
	},

  componentDidMount: function () {
		this.pokemonCenterToken = PokemonCenter.addListener(this.refreshPokemon);
		var idInt = parseInt(this.props.params.pokemonId);
    ApiUtil.masterball(idInt);
	},

	refreshPokemon: function () {
		var idInt = parseInt(this.props.params.pokemonId);
		var pokemon = PokemonCenter.find(idInt);
		this.setState({pokemon: pokemon});
	},

	componentWillUnmount: function () {
		this.pokemonCenterToken.remove();
	},

	componentWillReceiveProps: function (newProps) {
		var idInt = parseInt(newProps.params.pokemonId);
    ApiUtil.masterball(idInt);
	},

	render: function () {
		var detail = <div className="detail"></div>;

		if (this.state.pokemon){
			detail = <div className="detail">
				<img src={this.state.pokemon.image_url} title={"Who's that pokemon?! It's " + this.state.pokemon.name + "!"} />
				<h3>{this.state.pokemon.name}</h3>
				<p><strong>Type:</strong> {this.state.pokemon.poke_type}</p>
				<p><strong>Attack:</strong> {this.state.pokemon.attack}</p>
				<p><strong>Defense:</strong> {this.state.pokemon.defense}</p>
				<p><strong>Moves:</strong>  {this.state.pokemon.moves.join(", ")}</p>
        <ToyIndex toys={this.state.pokemon.toys} />
			</div>;
		}
    return(
			<div>
				<div className="pokemon-detail-pane">
						{detail}
				</div>
				{this.props.children}
			</div>
		);
	}
});

module.exports = PokemonDetail;
