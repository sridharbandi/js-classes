import jsonfile from './example.json';

console.log(jsonfile);
console.log(jsonfile.name);
console.log(jsonfile.email);
console.log(jsonfile.age);
console.log(jsonfile.cars);

for(let i = 0; i < jsonfile.cars.length; i++){
    console.log(jsonfile.cars[i])
}