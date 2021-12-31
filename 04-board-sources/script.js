const board = document.querySelector('#board');
const colors = ['#CFFFDC', '#93FFD8', '#548CFF', '#BAABDA', '#FC9918', '#6998AB', '#22577E', '#CD1818'];
const SQUARE_NUMBER = 841;

for(let i = 0; i < SQUARE_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover',  setColor);
	square.addEventListener('mouseleave', removeColor);

	board.append(square);
}

function setColor(event){
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event){
	const element = event.target;
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){ 
	return colors[ Math.floor(Math.random() * colors.length)];
}