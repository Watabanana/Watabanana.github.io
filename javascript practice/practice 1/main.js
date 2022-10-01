const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
	e.preventDefault();
	
	if(nameInput.value === '' || emailInput.value === '') {
		msg.classList.add('error');
		msg.innerHTML = 'Please fill up all requirement';
		
		setTimeout(() => msg.remove(), 2000);
	}
	
	else {
		const x = document.createElement('li');
		x.appendChild(document.createTextNode(nameInput.value + ' : ' + emailInput.value));
		
		userList.appendChild(x);
		
		nameInput.value = '';
		emailInput.value = '';
	}
}