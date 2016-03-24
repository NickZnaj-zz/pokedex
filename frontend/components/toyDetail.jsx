var React = require('react');
var PokemonCenter = require('../stores/pokemonCenter');
var ApiUtil = require('../util/apiUtil');
var ToyIndex = require('./toyIndex');

var ToyDetail = React.createClass({

	getInitialState: function () {
    return { toy: null };
	},

	getStateFromStore: function(){
	},
  componentDidMount: function () {
		this.pokemonCenterToken = PokemonCenter.addListener(this.refreshToy);
		var pokemonIdInt = parseInt(this.props.params.pokemonId);
		ApiUtil.masterball(pokemonIdInt);
	},

	refreshToy: function () {
		var pokemonIdInt = parseInt(this.props.params.pokemonId);
		var toyIdInt = parseInt(this.props.params.toyId);
		var pokemon = PokemonCenter.find(pokemonIdInt);
		if (pokemon.toys){
			for (var i = 0; i < pokemon.toys.length; i++){
				if (pokemon.toys[i].id === toyIdInt) {
					this.setState({ toy: pokemon.toys[i] }) ;
				}
			}
		}
	},

	componentWillUnmount: function () {
		this.pokemonCenterToken.remove();
	},

	componentWillReceiveProps: function (newProps) {

	},

	render: function () {
			var detail = <div className="detail"></div>;

			if (this.state.toy){
				detail = <div className="detail">

					<img src={this.state.toy.image_url} title={"always cats."} />

				</div>;
			}
			return(
				<div>
					{detail}
				</div>
			);
	}
});

module.exports = ToyDetail;
