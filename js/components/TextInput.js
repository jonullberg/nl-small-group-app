'use strict';

const React = require('react');

module.exports = React.createClass({
	render: function() {
		const { labelText, placeholder, onChange } = this.props;
		return (
			<div className="form-group">
				<label>{labelText}
					<input className="form-control" type="text" placeholder={placeholder} onChange={onChange} />
				</label>
			</div>
			)
	}
});