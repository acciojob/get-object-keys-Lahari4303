//your JS code here. If required.
let name ={
	a : "Ram",
	b : "Raju",
	c : "Pooja",
	d : "Lahari"
}
function getKeys(name){
	let keys=[]
	for(let key in name){
		keys.push(key)
	}
	return keys
}
console.log(getKeys(name))