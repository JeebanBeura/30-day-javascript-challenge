// Activity 1:
// Task 1:
document.getElementById('myId').textContent = 'This is the new text. by id';
// Task 2:
const element = document.querySelector('.myClass');
element.style.backgroundColor = 'lightblue';
// Activity 2:
// Task 3:
let div = document.createElement('div');
div.textContent = 'create a new div element with some text context and append it to the body'
document.body.appendChild(div);
// Task 4:
let li = document.createElement('li');
li.textContent = 'ADD JAVA + DSA';
document.querySelector('ul').appendChild(li);
// Activity 3:
// Task 5:
let rem = document.querySelector('.removeElement');
rem.remove();
// Task 6:
let removeli = document.querySelector('.li');
if (removeli.lastChild) {
    removeli.removeChild(removeli.lastChild)
}
// Activity 4:
// Task 7:
document.querySelector('img').src = 'https://phoneunder.wordpress.com/wp-content/uploads/2016/03/javascript-logo-png.png';
// Task 8:
document.querySelector('#demo').classList.add('highlight');
// document.querySelector('#demo').classList.remove('highlight');
// Activity 4:
// Task 7:
document.querySelector('button').addEventListener('click', () => {
    document.getElementById('paraId').innerHTML = 'After click the button text content of paragraph.';
});
// Task 8:
let ele = document.querySelector('#btn');
addEventListener('mouseover', () => {
    ele.style.backgroundColor = 'red';
}); 