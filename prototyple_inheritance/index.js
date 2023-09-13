// prototypal inheritance 

// there are multiple ways to achieve inheritance by class and extends keywords
//by objects make one object parent of another object

// const grandfather ={
//     gname :'pablo',
//     work:"mechanical",
//     fixVehicle:function(){
//         console.log(`${this.gname} fix bike`)
//     }

// }

// const father ={
//     fname :'henry',
//     work :"coding",
//     fixBugs:function(){
//         console.log(`${this.fname} fix bugs`)
//     },
//     __proto__:grandfather
// }

// const son = {
//     name:'peter',
//     work :'drama',
//     createDrama:function(){
//         console.log(`${this.name} funny guy`)
//     },
//     __proto__:father
// }
// console.log(son.fixVehicle())
// // if find difficulties that how identify this property this object there we use hasOwnProperty()  method
// const res = grandfather.hasOwnProperty("work");
// console.log(res);

// // if want to access hierarchy 
// console.log(son.__proto__.__proto__.gname);

// other way we find Object.create()method

const grandfather ={
    gname :'pablo',
    work:"mechanical",
    fixVehicle:function(){
        console.log(`${this.gname} fix bike`)
    }

}

const father =Object.create(grandfather); // now father has a parent object of grandfather
father.name="killu";
console.log(father)