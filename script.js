//your JS code here. If required.
let Student ={
	name : "Pooja",
	age : 20,
	city : "Hyderabad"
}
function getKeys(student){
	return Object.keys(student)
}
console.log(getKeys(Student))