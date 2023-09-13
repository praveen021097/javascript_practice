// callback 
console.log("start")
function callbackFunction (name){
    console.log(name)
}

function showName (n,cb){
    console.log("higher order function ");
    cb(n)// callback 
}

showName("amit",callbackFunction)


const arr = [2,3,4,6,7];

const double =arr.map((el)=>{
    return el*2
})

console.log(double)
console.log("end")// now it behave synchronously

//  now we create a problem and solve first with callback there we see how callback is useful for us  after that tells you it is not good way 
// how it converts into callback hell and promises help us 

// here is the problem senario is that we get name to user and by the name get hobbies 

 // first without callback its create problem 

//  function getName(name){
//     setTimeout(()=>{
//         console.log("inside setTimeout function");
//         return name 
//     },2000)
//  }

 
 // we use callback here
//  function getName(name,cB){
//     setTimeout(()=>{
//         console.log("inside setTimeout function");
//     cB(name)
//     },2000)
//  }

 // we make more complex 
//  function getHobbies(name,cB){
//     setTimeout(()=>{
//         console.log(" inside gethobbies timeout");
//         cB(["cricket","guitar","live alone"])
//     },2000)
//  }
// here is one function depend on other function this is little program if we use more callback so user cant understand code
// that is call back hell
// here Promises plays vital role
//  getName("Praveen",(nm)=>{console.log(nm)
// getHobbies(nm,(hobbies)=>{console.log(hobbies)})});


// we solve this same problem by promises

function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name)
        },2000)
    })
}

function getHobbies(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["cricket","guitar","live alone"])
        },2000)
    })
}

// getName("sonam").then(nm=>getHobbies().then(hobbies=>console.log(hobbies)))
// how we use asyc await
async function showData(){
    try{
        const nm =await getName("sonam");
    const hobbies=await getHobbies(nm);
    console.log(hobbies)

    }catch(err){
        console.log(err)
    }
    finally{
        console.log("we get data")
    }

}

showData()
// we find undefined