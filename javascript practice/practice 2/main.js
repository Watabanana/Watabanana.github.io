const bg = document.querySelector('body');
const upperBox = document.querySelector('.upperbox');
const lowerBox = document.querySelector('.lowerbox');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

bg.style.background = '#ccc';

btn1.addEventListener('click', (e) => {
	e.preventDefault();
	upperBox.style.background = 'blue';
	
	setTimeout(() => upperBox.style.background = 'white', 1000);
})

btn2.addEventListener('click', (e) => {
	e.preventDefault();
	lowerBox.style.background = 'red';
	
	setTimeout(() => lowerBox.style.background = 'white', 1000);
})