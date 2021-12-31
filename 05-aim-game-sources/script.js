const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const circles = document.querySelectorAll('.circle');
const colors = ['#CFFFDC', '#93FFD8', '#548CFF', '#BAABDA', '#FC9918', '#6998AB', '#22577E', '#CD1818'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
	event.preventDefault();
	screens[0].classList.add('up');
});


timeList.addEventListener('click', event => {
	if(event.target.classList.contains('time-btn')){
		time = parseInt(event.target.getAttribute('data-time'));
		screens[1].classList.add('up');
		startGame();
	}
});

board.addEventListener('click', event => {
	if(event.target.classList.contains('circle')){
		score++;
		event.target.remove();
		createeRandomCircle();
	}
});


function startGame(){
	setInterval(decreaseTime, 1000);
	createeRandomCircle();
	setTime(time);
}

function decreaseTime(){
	if(time === 0){
		finishGame();
	}else{
		let current = --time;
		if(current < 10){
			current = `0${current}`;
		}
		setTime(current);
	}
}

function setTime(value){
	timeEl.innerHTML = `00:${value}`;
}

function finishGame(){
	timeEl.parentElement.classList.add('hide');
	board.innerHTML = `<h1>Счет: <span class='primary'> ${score}</span> </h1>`;
}

function createeRandomCircle(){
	const circle = document.createElement('div');
	circle.classList.add('circle');
	const size = getRandomNumber(20, 100);
	const {width, height} = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);

	circle.classList.add('circle');
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;

	board.append(circle);
}

function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

//BG COLORs

function setColor(event){
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

board.addEventListener('mouseover',  setColor);
board.addEventListener('mouseleave', removeColor);

function setColor(event){
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event){
	const element = event.target;
	element.style.backgroundColor = `linear-gradient(118.38deg, #29323C -4.6%, #485563 200.44%)`;
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){ 
	return colors[ Math.floor(Math.random() * colors.length)];
}