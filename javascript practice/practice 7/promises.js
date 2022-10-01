const posts = [
	{
		title: 'Post One',
		body: 'this is a post one'
	},
	{
		title: 'Post Two',
		body: 'this is a post two'
	}
]

/*function getPosts() {
	setTimeout(() => {
		let output = ''
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
		})
		
		document.body.innerHTML = output
	}, 1000)
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post)
			
			const error = false
			
			if(!error) {
				resolve()
			} else {
				reject('Error No data')
				}
		
		}, 2000)
	})
}*/

/*createPost({
	title: 'Post Three',
	body: 'this is a post two'
})

.then(getPosts)
.catch(err => console.log(err.toUpperCase()))*/

//Async / Await

/*async function pom() {
	await createPost({
		title: 'Post Three',
		body: 'this is a post three'
	})
	
	getPosts()
}

pom()

.catch(err => document.write(err.toUpperCase()))*/

//Async / Await / Fetch
async function fetchUsers() {
	
	let output = ''
	
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	
	const data = await res.json()
	
	console.log(data)
	
	data.forEach((allName) => {
		output += `<li>${allName.address.geo.lat}</li>`
	})
	
	document.body.innerHTML = output
}

fetchUsers()

//Promise.all
/*const prom1 = Promise.resolve('hello world')
const prom2 = 156
const prom3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'goodbye'))

const prom4 = fetch('https://jsonplaceholder.typicode.com/users') .then(res => res.json())

Promise.all([prom1, prom2, prom3, prom4]).then(values => console.log(values))*/







