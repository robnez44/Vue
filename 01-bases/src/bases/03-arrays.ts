const numberArray = [1,'2',3,4,5];
numberArray.push(6);

const numberArray2 = [...numberArray];
numberArray.push(7);



console.log({numberArray, numberArray2});


export {};


