const cities = ['Monterrey', 'Bogotá', 'Lima', 'Buenos Aires'];

const randomCity = () => {
	return cities[Math.floor(Math.random() * cities.length)];
};

const reverseString2 = (string) => {
	return new Promise((resolve, reject) => {
		if (!string) {
			reject(Error('Error'));
		}
		resolve(string.split('').reverse().join(''));
	});
};

module.exports = randomCity;
