//your JS code here. If required.
let Student ={
	name : "Pooja",
	age : 20,
	city : "Hyderabad"
}
function getKeys(student){
	for(let key in student){
		return Object.keys(student)
	}
}
console.log(getKeys(Student))