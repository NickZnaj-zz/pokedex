var React = require('react');
var History = require('react-router').History;

var ToyIndexItem = React.createClass({
	mixins: [History],

  showDetail: function (e) {
    this.history.push("/pokemon/" + this.props.toy.pokemon_id + "/toys/" + this.props.toy.id);
	},

	render: function () {
		return <li onClick={this.showDetail} className="toy-list-item">
			{this.props.toy.name}
		</li>;
	}
});

module.exports = ToyIndexItem;
