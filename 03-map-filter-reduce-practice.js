// Try these map filter and reduce practice problems

const names = ['anatoly', 'bobby', 'carlsen']
const primes = [1,2,3,5,7,11,13]
const users = [
	{
		name: 'anatoly',
		rating: 2848
	}, 
	{
		name: 'bobby',
		rating: 2785
	},
	{
		name: 'carlsen',
		rating: 2882
	},
]

// Solve the problems below using map, filter, and reduce. 
// Be sure to log the results to the console as you solve 
// each problem to check your results. 

// Map 

// Create an array of uppercase names
const upperNames = names.map(name => name.toUpperCase())
console.log(upperNames)

// TODO: Map the names array to an array of three letter strings 
// ['anatoly', 'bobby', 'carlsen'] -> ['ana', 'bob', 'car']


// TODO: Use map to create an array of squares from the primes array. 
// [1,2,3,5,7,11,13] -> [1,4,9,25,49,121,169]


// TODO: Map the users array into an array of name strings: 
// [{ name: "" }, {}, {}] -> ['anatoly', 'bobby', 'carlsen']


// Filter

// Use filter to create an array that has a subset of the items 
// from the source array. 

// TODO: Filter the names array to create a new array that 
// that contains only names that begin with the letter 'b'


// TODO: Filter the primes array to a new array that contains 
// only numbers that are greater than 10


// TODO: Filter the users array to a new array containing 
// Users with a rating greater than 2800



// Reduce

// Use reduce to aggregate the contents of an array to 
// a single new value. Usually you'll reduce to a number or 
// string but sometimes you'll reduce to an array or object. 

// Be sure to include an initial value when using reduce. This 
// is the second praramter: arr.reduce(callBack, initalValue)
// arr.reduce(() => {}, 0) <- here 0 is the intial value! 

// TODO: Reduce the names array to a string made from the first 
// letter of each string in the source array: 
// ['anatoly', 'bobby', 'carlsen'] -> 'abc'


// TODO: Reduce the primes array to the total sum of all 
// numbers in the array. 


// TODO: Reduce the users array to on object with the key 
// as the name and value as the rating. For example: 
// [{ name: "anatoly", rating: 2848 }, {}, {}] -> { 'anatoly': 2848, 'bobby': 2785, 'carlsen': 2882 }

