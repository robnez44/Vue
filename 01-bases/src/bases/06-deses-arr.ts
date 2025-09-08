const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [ g,v,t ] = character;

const returnArray = () => {
    return [123, 'ABC'] as const; // para evitar errores
}

const [numbers, letters ] = returnArray();

console.log(numbers * 2, letters.toLowerCase() )

