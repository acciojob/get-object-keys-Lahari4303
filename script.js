//your JS code here. If required.
const student = {
  name: "John"
}
function getKeys(student){
	return Object.keys(student)
}
const person = {
  name: "Alice",
  age: 22,
  city: "New York"
};

console.log(getKeys(person)); 
console.log(getKeys(Student))