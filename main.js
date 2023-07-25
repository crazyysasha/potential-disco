const str = `sdf`;

let num = 234233;

let isTrue = true;

let arr = [
    'Ozodbek',
    'Odilbek',
    "Sardorkin",
    // isTrue, 
    // typeof num,
];

console.log(typeof str, typeof num, typeof isTrue, arr);

arr.push('Sasha');

// console.log(arr[3]);

arr[2] = 'Sardor'

// arr = 2;

console.log(typeof arr, Array.isArray(isTrue));


// console.log(['Odilbek', 'Sardor'][1]);
const user = { name: 'Odilbek', surname: 'Mamayoqubov' };
console.log(user.name);
//  array name => users 
//  name, surname, email, age, gender


const sardor = { name: "Sardor", surname: 'Tulqinov', age: 14, email: 'sardorik64@gmail.com', git: 'SARDORIK1' };

const odil = { name: "Odilbek", surname: 'Mamayoqubov', age: 14, email: 'lol_1717@inbox.ru', git: 'ozolox123' };
const ozod = { name: 'Ozodbek', surname: "Mamayoqubov", age: 11, email: 'odilbeklezgin@gmail.com', git: 'ozodbek180712' };
const users = [sardor, odil, ozod];

console.log(users);