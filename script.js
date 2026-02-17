// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Example Tests

// Test 1: Object with multiple properties
const person = {
  name: "Alice",
  age: 22,
  city: "New York"
};

console.log(getKeys(person)); 
// Expected Output: ["name", "age", "city"]

// Test 2: Object with single property
console.log(getKeys(student)); 
// Expected Output: ["name"]
