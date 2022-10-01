const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator_keys')
const display = document.querySelector('.calculate_display')

keys.addEventListener('click', e => {
	if (e.target.matches('button')) {		
		const key = e.target
		const action = key.dataset.action
		const keyContent = key.textContent
		let displayedNum = display.textContent
		const previousKeyType = calculator.dataset.previousKeyType
	
		Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
		
		//number
		if (!action) {
			if (displayedNum === '0' || previousKeyType === 'operator') {
				display.textContent = keyContent
			} else {
				display.textContent = displayedNum + keyContent
			}
			
			calculator.dataset.previousKeyType = 'number'
		}
		
		//operator
		if (
		action === 'add' ||
		action === 'subtract' ||
		action === 'multiply' ||
		action === 'divide'
		) {
			const firstValue = calculator.dataset.firstValue
			const operator = calculator.dataset.operator
			const secondValue = displayedNum
			
			if (firstValue &&
				operator &&
				previousKeyType !== 'operator') {
					display.textContent = calculate(firstValue, operator, secondValue)
					
					displayedNum = display.textContent
			}
			
			key.classList.add('is-depressed')
			calculator.dataset.previousKeyType = 'operator'
			calculator.dataset.firstValue = displayedNum
			calculator.dataset.operator = action
		}
		
		//clear
		if (action === 'clear') {
			console.log('clear key!')
		}
		
		//calculate
		if (action === 'calculate') {
			const firstValue = calculator.dataset.firstValue
			const operator = calculator.dataset.operator
			const secondValue = displayedNum
			
			if (firstValue &&
				operator &&
				previousKeyType !== 'operator') {
					display.textContent = calculate(firstValue, operator, secondValue)
					
					displayedNum = display.textContent
			}
		}
	}
})

const calculate = (n1, operator, n2) => {
	
	let result
	
	if (operator === 'add') {
		result = parseFloat(n1) + parseFloat(n2)
	} else if (operator === 'subtract') {
		result = parseFloat(n1) - parseFloat(n2)
	} else if (operator === 'multiply') {
		result = parseFloat(n1) * parseFloat(n2)
	} else if (operator === 'divide') {
		result = parseFloat(n1) / parseFloat(n2)
	}
	
	return result
}