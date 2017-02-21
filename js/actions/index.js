'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

module.exports = {
	updateFirstName: (e) => {
		return ({
			type: 'UPDATE_FIRSTNAME',
			firstName: e.target.value
		})
	}
	, updateLastName: (e) => {
		return ({
			type: 'UPDATE_LASTNAME',
			lastName: e.target.value
		})
	}
	, updateEmail: (e) => {
		return ({
			type: 'UPDATE_EMAIL',
			lastName: e.target.value
		})
	}
	, updatePhone: (e) => {
		return ({
			type: 'UPDATE_PHONE',
			lastName: e.target.value
		})
	}
	, submitUserForm: (e) => {
		e.preventDefault();
		createUser(function(response) {
			console.log(response)
		});
		return ({
			type: 'SUBMIT_USER_FORM'
		})
	}
}


function createUser(callback) {
	var body = {
		name: {
			first: 'Jonathan',
			last: 'Ullberg'
		},
		email: 'jonathan@example.com',
		phone: '4253084194'
	}
	fetch('http://localhost:3050/api/users', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	});
}