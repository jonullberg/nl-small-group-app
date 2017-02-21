'use strict';

const React = require('react');
const TextInput = require('./TextInput');
const Button = require('./Button');
const ajaxController = require('../controllers/ajaxController');
const {
	updateFirstName,
	updateLastName,
	updateEmail,
	updatePhone,
	submitUserForm
} = require('../actions')

module.exports = React.createClass({
	render: function() {
		return (
				<form className="form-horizontal">
					<TextInput labelText="First Name" placeholder="John" onChange={updateFirstName} />
					<TextInput labelText="Last Name" placeholder="Doe" onChange={updateLastName} />
					<TextInput labelText="Email" placeholder="johndoe@example.com" onChange={updateEmail} />
					<TextInput labelText="Phone" placeholder="(555)555-5555" onChange={updatePhone} />
					<Button buttonText="Submit" buttonType="submit" onClick={submitUserForm} />
				</form>
			)
	}
});