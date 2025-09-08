//console.log("Inicio");

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise((resolve, reject) => {
//   // console.log('Cuerpo de la promesa');
//   setTimeout(() => {
//     //resolve("Mi amigo cumplio");
//     // return; para ya no ejectuar nada mas en el cuerpo
//     reject('Mi amigo no cumplio');

//   }, 1000);


// })
//     .then((message) => console.log(message))
//     .catch( errorMessage => console.log(errorMessage) )
//     .finally( () => console.log('Fin de la promesa') );
//console.log("Fin");

const getHeroByIdAsync = (id: number):Promise<Hero> => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById( id );

            hero ? resolve(hero) : reject('Heroe no encontrado')            

        }, 1500);        
    })
}

getHeroByIdAsync(200)
    .then( hero => console.log('El nombre es', hero.name))
    .catch( alert )