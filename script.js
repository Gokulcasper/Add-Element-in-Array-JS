// Adding Elements in Array

const fruitsItems = ["apple", "orange", "mango"];

//Push
fruitsItems.push("Grapes");

//unshift
fruitsItems.unshift("lemon");

//splice
fruitsItems.splice(1, 0, "Banannas");

console.log(fruitsItems);

console.log(fruitsItems.indexOf("mango") !== -1); //True

console.log(fruitsItems.indexOf("strawberry") !== -1); // False

console.log(fruitsItems.includes("mango")); // True

console.log(fruitsItems.includes("Jackfruit")); // False
