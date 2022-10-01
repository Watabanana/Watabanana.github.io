const formOnly = document.querySelector('#addForm')
const itemList = document.querySelector('#items')
const filter = document.querySelector('#filter')

//form submit event
formOnly.addEventListener('submit', addItem)

//delete event
itemList.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems)

//add item
function addItem(e) {
	e.preventDefault()
	
	//get input value
	const newItem = document.getElementById('item').value
	
	//create new li element
	const li = document.createElement('li')
	
	//add class
	li.className = 'list-group-item'
	
	//add text node input value
	li.appendChild(document.createTextNode(newItem))
	
	//create delete Button element
	const deleteBtn = document.createElement('button')
	
	//add classes to delete button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
	
	//append text node
	deleteBtn.appendChild(document.createTextNode('X'))
	
	//append button to li
	li.appendChild(deleteBtn)
	
	//append li to list
	itemList.appendChild(li)
}

//remove item
function removeItem(e) {
	if(e.target.classList.contains('delete')) {
		if(confirm('Are You Sure?')) {
			var li = e.target.parentElement
			itemList.removeChild(li)
		}
	}
}

//filter items
function filterItems(e) {
	//convert text to lowercase
	const txt = e.target.value.toLowerCase()
	
	//get list
	var items = itemList.getElementsByTagName('li')
	
	//convert to an array
	Array.from(items).forEach(function(item) {
		var itemName = item.firstChild.textContent
		if(itemName.toLowerCase().indexOf(txt) != -1) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}