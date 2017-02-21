'use strict';

const { createUserObject } = require('../utils/utils');

module.exports = {
	sendUserForm: (e) => {
		const user = createUserObject(validateUserForm(e));
	}
}

function validateUserForm(event) {
	return event;
}