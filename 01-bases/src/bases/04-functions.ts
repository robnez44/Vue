//function greetPerson( name: string){
//    return `Hola, ${ name }`;
//}

//const greetPerson = (name: string) => {
//    return `Hola, ${ name }`;
//}

const greetPerson = (name: string) => `Hola, ${name}`;

const getUser = (uid: string) =>
    ({
        uid,
        userName: 'Tony001'
    })

console.log(getUser('XYZ-456'))

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
];

const hero = heroes.find( (h) => h.id === 1);

console.log(hero?.name.toUpperCase);