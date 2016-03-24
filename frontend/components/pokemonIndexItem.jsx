var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
	mixins: [History],

  showDetail: function (e) {
    this.history.push("/pokemon/" + this.props.pokemon.id);
	},

	render: function () {
		return <li onClick={this.showDetail} className="poke-list-item">
			{this.props.pokemon.name}
		</li>;
	}
});

module.exports = PokemonIndexItem;
