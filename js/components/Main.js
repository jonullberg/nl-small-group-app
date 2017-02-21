'use strict';

import React from 'react';
import Form from './Form';

const Main = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Create an account</h2>
				<Form />
			</div>
		);
	}
});

module.exports = Main;