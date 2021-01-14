const text = 'Hello world';
const frameworks = ['Angular', 'Vue', 'React', 'Svelte'];

// Testing strings
test('It should has the word world', () => {
	expect(text).toMatch(/world/);
});

// Testing arrays
test('It should has Angular', () => {
	expect(frameworks).toContain('Angular');
});

// Testing numbers
test('It should be greater than 9', () => {
	expect(10).toBeGreaterThan(9);
});

// Testing booleans
test('It should be true', () => {
	expect(true).toBeTruthy();
});

// Testing callbacks

// Reverse strings function
const reverseString = (string, callback) => {
	callback(string.split('').reverse().join(''));
};

// Test for callback
test('Callback should return a reversed word', () => {
	reverseString('Hola', (string) => {
		expect(string).toBe('aloH');
	});
});

// Testing promises

// Reverse strings function 2
const reverseString2 = (string) => {
	return new Promise((resolve, reject) => {
		if (!string) {
			reject(Error('Error'));
		}
		resolve(string.split('').reverse().join(''));
	});
};

// Test for promise
test('Promise should return a reversed string', () => {
	return reverseString2('Hola').then((string) => {
		expect(string).toBe('aloH');
	});
});

// Testing async/await
test('async/await should return a reversed string', async () => {
	const string = await reverseString2('Hola');
	expect(string).toBe('aloH');
});

// Run something before and after of our tests
// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));
// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
