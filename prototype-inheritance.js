let superObj = { superVal: "super" };
// let subObj = { subVal: "sub" };
// subObj.__proto__ = superObj; // prototype, __proto__
let subObj = Object.create(superObj);
subObj.subVal = "sub";
debugger;

console.log("subObj.subVal => " + subObj.subVal);
console.log("subObj.superVal => " + subObj.superVal);
subObj.superVal = "sub";
console.log("superObj.superVal =>", superObj.superVal);
