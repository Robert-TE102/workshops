/*console.log("Hello World.");*/

/*const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function () {
    console.log("Hello!");
  },
};
person.sayHello();*/

/*const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (name) {
    console.log("Hello " + name + " How are you?");
  },
};

person.sayHello("Alice");*/

/*const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  getAge: function () {
    return this.age;
  },
};

const age = person.getAge();

console.log(age);*/

/*const car = {
  make: "Ford",
  model: "Fiesta",
  color: "Teal",
  sayAdvert: function (car) {
    " make ", +" model ", +" color ";
    console.log(" make ", " model ", " color ");
  },
};*/

const car = {
  make: "Ford",
  model: "Fiesta",
  color: "Teal",
  getAdvert: function () {
    return this.make.model.color;
  },
};

const ("make","model","color") = getAdvert();

console.log("make", "model", "color");
