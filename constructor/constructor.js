//basically constructor is a special function that return a object ;
// this keyword refer current object with the help of this keyword we access or define the key of object;
//we can pass parameter for giving the dynamic value of the object;
// we create with the help of constructor function multiple object of same type;

// like boss said that create 100 employees data thats the write way 
function Person(name,email,address){
    this.name=name;
    this.email=email;
    this.address=address;
}

const amit = new Person("Amit","amit@gmail.com","kanpur");
const sumit = new Person("sumit","sumit@gmail.com","delhi");

console.log(amit);

// call, apply, bind 

// these are the very useful methods of uses of object 

const kitchen = {
    place :"kitchen",
    work :'cookfood',
    cookfood:function(order){
        console.log(`the name of person ${this.name} and email is ${this.email} and his order id ${order}`)
    }
}
kitchen.cookfood.apply(amit,["maggie"]);
kitchen.cookfood.call(amit,["golgappe"]);
 const order = kitchen.cookfood.bind(amit,["paneer"]);
 order();