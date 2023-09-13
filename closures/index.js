

 
 // closures

//   function outer(a){
//     let name ="pk";
   
//     function inner(){
//         return name
//     }

//     return inner
   
//   }

//    const name = outer();
//    // after executing outer function lexical scope store the reference of outer function 
//   console.log(name() )

  //  other condition 
// function outer(a){
//     let name ="pk";
   
//     function inner(){
//         return name
//     }
//     name ="sahil"
//     return inner
   
//   }
// // now what will be the output
// // now sahil because it lexical scope store reference not value
//    const name = outer();
//    // after executing outer function lexical scope store the reference of outer function 
//   console.log(name() )

 //one more condition 
 
 function outer(a){
    let name ="pk";
   
    return function inner(){
        let name2="kavi"
        return function insider(){
            return function insidest(){
                return `${name} and ${name2}`
            }
        }
    }
    
   
   
  }

   const name = outer()()()();
   // after executing outer function lexical scope store the reference of outer function 
  console.log(name )