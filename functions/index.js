// basic function // named function

function add (a,b){ // function declaration and function statement 
    let z = a+b;
    
    return z // returning a value 

}

console.log(add(3,4))


// anonymous function 

let obj ={
    hello:function(){
            console.log("hello")
    }
}

obj.hello()


// function expression 
// while a function assign to a variable that called function expression


const eat = function (){// cannot hoisted 
    console.log("eating")
}
 eat()

 // arrow function 

 const raining =()=>{
    console.log("raining")
 }
 raining()
 // it not have any kind this because it refer to parent object 

 function Obj2() {
    this.name ="praveen";
    this.greed =()=>{
        let name ="ram"
        console.log(this.name)
    }
 }

 const drum = new Obj2();

 drum.greed()// does not hoisted

 // callback functions 

 // callback function is nothing but it is a function that passed as argument in another function
 // it is very helpfull for handling asyncronous things and higher order function 

 let arr = [3,4,5,6,7,];

 const ans = arr.map((el,index)=>{
    return  el*index+1
 })
 console.log(ans)

 // also help async operation 

 setTimeout(()=>{
    console.log("setTimeout")
 },3000)

 // it help us in varous condition  
 //in web api
 // promises
 //settimeout setInterval
 // in higher order function
 // in eventlistener 

 // higher order function 
 // a function that take a callback in as a parameter 
 



//

 function callbackFunction(z){
    console.log(z);
}

// higher order function
function higherOrderFunction(a,b,func){
    console.log('I am higher order function')


    let z = a+b
    func(z)
}

higherOrderFunction(4,6,callbackFunction);