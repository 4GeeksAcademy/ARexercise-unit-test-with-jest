// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBeCloseTo(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); 
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5* 156.5;
    expect(yen).toBe(expected);
})

test("One yen should be 0.813 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(3.5);
    const expected = 3.5* 0.87;
    expect(pound).toBe(expected);
})
