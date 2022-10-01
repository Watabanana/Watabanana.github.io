/*const cl = document.querySelector('body');
const header = document.querySelector('#main-header');
const headerTitle = document.querySelector('#header-title');
const items = document.querySelectorAll('.list-group-item');
const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
const even = document.querySelectorAll('.list-group-item:nth-child(even)');

cl.style.background = '#ccc';

header.style.borderBottom = 'solid 10px black';

headerTitle.style.color = 'red';

for(i = 0; i < items.length; i++) {
	
	items[i].style.backgroundColor = '#f4f4f4';
	
}

for(i = 0; i < odd.length; i++) {
	odd[i].style.color = 'blue';
	even[i].style.color = 'red';
}

items[2].style.color = 'yellow'; */

/*const newDiv = document.createElement('div');
const newDivText = document.createTextNode('Hello World');
const container = document.querySelector('header .container');
const h1 = document.querySelector('header #header-title');

newDiv.className = 'hello';

newDiv.id = 'wow';

newDiv.setAttribute('title', 'Hello Div');

newDiv.appendChild(newDivText);

console.log(newDiv);

container.insertBefore(newDiv, h1);*/

/*const btn = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick (e) {
	console.log('Position X: ' +e.offsetX)
	console.log('Position Y: ' +e.offsetY)
	
	let shiftClick = e.shiftKey
	
	console.log(e.shiftKey)
	
	if (shiftClick = e.shiftKey) {
		document.getElementById('header-title').textContent = 'Hello World'
	} else {
		document.getElementById('header-title').textContent = 'Bye World'
	}
}*/

//const btn = document.getElementById('button')
//const box = document.getElementById('box')
const itemInput = document.querySelector('input [type="text"]')
const formOnly = document.querySelector('form')
const sel = document.querySelector('select')

//btn.addEventListener('click', runEvent)
//btn.addEventListener('dblclick', runEvent)
//btn.addEventListener('mousedown', runEvent)
//btn.addEventListener('mouseup', runEvent)


//box.addEventListener('mouseenter', runEvent)
//box.addEventListener('mouseleave', runEvent)

//box.addEventListener('mouseover', runEvent)
//box.addEventListener('mouseout', runEvent)

//box.addEventListener('mousemove', runEvent)

//addEventListener type (keydown, keyup, keypress, focus, blur, cut, paste, input, change, submit)

sel.addEventListener('change', runEvent)

function runEvent(e) {
	console.log('Event Type: '+e.type)
	
	console.log(e.target.value)
	
	//output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'
	
	//document.querySelector('#main').style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
}














