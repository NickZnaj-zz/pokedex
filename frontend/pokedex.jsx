var React = require('react');
var ReactDOM = require('react-dom');
var PokemonIndex = require('./components/pokemonIndex');
var PokemonDetail = require('./components/pokemonDetail');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var ToyDetail = require('./components/toyDetail');

var App = React.createClass({
  render: function () {
		return <div id="pokedex">
      <div className="pokemon-index-pane">
				<PokemonIndex />
      </div>
			{this.props.children}
		</div>;
	}
});

$(function () {
	ReactDOM.render(
		<Router history={hashHistory}>
      <Route path="/" component={App}>
				<Route path="/pokemon/:pokemonId" component={PokemonDetail}>
					<Route path="toys/:toyId" component={ToyDetail} />
				</Route>
      </Route>
		</Router>,
			$("div#root")[0]
	);
});
