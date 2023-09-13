// rest operator
 function showValue(a,...values){
    console.log(a);
    console.log(values[2])// its store values i a array 
    // before rest operator we done this things by arguments object
// both looks like array but arguments not real array we cant traverse, apply array methods 
// but rest operator gives us real array and one more thing it store rest of value except other args
// arguments object store all parameter and args
 }
 showValue(4,3,4,5,5,6,6)


 // spread operator
const names = ["praveen", "ravi","sumit","vikram","anil"]
 function showSomething(name1,name2,name3 ){
    console.log(name1,name2,name3)

 }

 showSomething(...names)// spread extract values

//  spread operator have lots of uses

// if you want to copy array and object you faces some problems like 
// here deep copy 
 const arr = [1,3,4,5,6,6,7];
//  const b= arr ;
 // if you want to change b and arr changes reflect in both 

//  b[0]="amit";

 console.log(arr) // ['amit', 3, 4, 5, 6, 6, 7] here you surprised but do not worry we know already non
 // primitive data type store the reference the value not actual value here both array in same memory allocation
 // we solve this problem by spread operator 


const b = [...arr];
b[0]="anil";
console.log(arr);
console.log(b)

// same as behave with objects 
const obj = {
    name :"ravi",
    address :"kalpi"
}

 const obj2 = {...obj};
 obj2.address= "kanpur";

 console.log(obj2)
 console.log(obj)