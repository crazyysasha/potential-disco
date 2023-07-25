// console.log('hello JS');

const button = document.getElementById('button');
button.addEventListener('click', function () {
    console.log('this button is clicked');

    cart.innerHTML = 'korzina ' + count;
    count++;
});
let count = 0;
const h1 = document.querySelector('h1');
// // h1.innerText = "hello <i>JS</i>"
// h1.innerHTML = "hello <i>JS</i>"
// var, let, const 
let name1 = "Odilbek";

console.log(name1);

name1 = "Ozodbek";

console.log(name1);

name3 = 'dsfd';


console.log(name3);

let type1 = "String";

let number = 345;

console.log(345 + '3544');