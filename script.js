//your JS code here. If required.
let name ={
	a : "Ram",
	b : "Raju",
	c : "Pooja",
	d : "Lahari"
}
function getKeys(name){
	for(let key in name){
		return Object.keys(name)
	}
}
console.log(getKeys(name))