// operators 

// operators is a special symbols that performs the operation on operands 

// arithmetic operators

function Calculations (){
   this.addition=(a,b)=>{
            return a+b
    };
    this.substraction=(a,b)=>{
        return a-b
};

this.multiplication=(a,b)=>{
    return a*b
};


this.divide=(a,b)=>{
    return a/b
};


this.multiplication=(a,b)=>{
    return a*b
};

}

const calcy = new Calculations();

console.log(calcy.addition(2,4))
console.log(calcy.substraction(2,4))
console.log(calcy.multiplication(2,4))
console.log(calcy.divide(2,4))

// % operators used for getting remainder 

const rem = 5%2;
console.log(rem)

// increment operators ,decrement operators 

// the best factor about increment and decrement operators it is increase or decrease first after assign

let a =1;
console.log(a++)
a++
console.log(++a)
console.log(a--)
a--
console.log(--a)

// we are not talking about rest of operators 
// because we talk about them later

//  ternary operators

// basically it works like if else conditional statement

let b = 4 ;
 let ans = b>5?"hello":"bye";
 console.log(ans)


 // comma operators basically it is seperator used many time 

 var arr2 = [34,5,6,7,8];

 // delete operator 
 // basically it help use to delete object property 

 let person = {
    name :"ravi ",
    address:"kalpi ",
    work :'sleep'
 }
 console.log(person)

 // if you want to delete something it help you 
 delete person.name;
 console.log(person)

 //instance of 
 //it tells us it is a intance of this particular class or constructor

 if(calcy instanceof Calculations){
    console.log("yes");

 }
 else {
    console.log("no")
 }

 console.log(calcy instanceof Calculations);

 // in operators
 // in operators help us to iterate object 

 for (let key in person){
    console.log(key)
 }

 // new operators help us to create new instance of constructor and class

 const ravical = new Calculations();


 // type of 
 // basically it help us to find data type of value 

 console.log(typeof a)
 // void its prevent return value of function

 // it help in generotpors