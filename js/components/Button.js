'use strict';

const React = require('react');

module.exports = React.createClass({
	render: function() {
		const { buttonType, buttonText, onClick } = this.props;
		return (
			<button className="btn btn-default" onClick={onClick} type={buttonType}>{buttonText}</button>
			);
	}
});