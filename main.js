//document, window, navigator

console.dir(document.body.clientHeight);

// document.body.addEventListener('click', function ({ target }) {
//     console.log(target);
// });


document.body.addEventListener('click', function (event) {
    console.log(event.target);
});

const button = document.querySelector('button');

function onClickHandler(event) {
    event.stopPropagation();
    console.log('event on button: ', event.target);
    console.log(event.clientX, event.clientY);
    // button.removeEventListener('click', onClickHandler);
}
button.addEventListener('click', onClickHandler);

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

const sardorP = document.getElementsByClassName('sardor');

console.log(sardorP);