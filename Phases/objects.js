
let user  = new Object();
let users = {};

// Literals and properties
// We can immediately put some properties into {...} as “key: value” pairs:

let obj = {
    name:"user",
    age:21
}

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;

// To remove a property, we can use the delete operator:
delete user.age;

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }

//   Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
    for(let key in obj){
        return false;
    }
    return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// these objects do the same

user = {
    sayHi: function() {
      alert("Hello");
    }
  };

