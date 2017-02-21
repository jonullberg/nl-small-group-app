'use strict';

module.exports = function reducer(state, action) {
	switch(action.type) {
		case 'UPDATE_FIRSTNAME':
			return {
				...state,
				firstName: action.firstName
			}
		case 'UPDATE_LASTNAME':
			return {
				...state,
				lastName: action.lastName
			}
		case 'UPDATE_EMAIL':
			return {
				...state,
				email: action.email
			}
		case 'UPDATE_PHONE':
			return {
				...state,
				phone: action.phone
			}
		default:
			return state;
	}
}
