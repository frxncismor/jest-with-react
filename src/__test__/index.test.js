const randomCity = require('../index');

describe('Test the functionality of randomCity function', () => {
	test('It should return a string', () => {
		expect(typeof randomCity()).toBe('string');
	});
	test("It should return false if the city doesn't exist", () => {
		expect(randomCity()).not.toMatch(/Guadalajara/);
	});
});
