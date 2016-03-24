var React = require('react');
var ToyIndexItem = require('./toyIndexItem');

var ToyIndex = React.createClass({

	componentDidMount: function () {
    this.setState({});
	},

	componentWillUnmount: function () {

	},

	componentWillReceiveProps: function (newProps) {
		this.setState({});

	},

	resetPokemon: function () {

	},

	render: function () {
		var toyComponents = null;
		if (this.props.toys) {
			toyComponents = this.props.toys.map( function (toy) {
        return <ToyIndexItem key={toy.id} toy={toy} />;
			}.bind(this));
		}
		return <ul>{toyComponents}</ul>;
	}
});

module.exports = ToyIndex;
