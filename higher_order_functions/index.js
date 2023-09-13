// higher order function a function that tale a function as a argument 

// foreach // traverse array

const names = ["ravi","kushal","guru","randy"];

names.forEach((el)=>{
    console.log(el)
})
// map // return an array // for modify array specially with values

const res= names.map((el)=>{
    return `${el} ji`
})

console.log(res);

const persons =[
    {name:"ravi",age:30,work:"drama"},
    {name:"sunny",age:33,work:"poet"},
    {name:"suman",age:50,work:"kinner"},
    {name:"kundan",age:30,work:"drama"},
    {name:"sunil",age:43,work:"ponga"},
    {name:"sulabh",age:50,work:"alcoholic"}
]
//filter

const age30 = persons.filter((el)=>{
    if(el.age <=30){
        return el
    }
})
console.log(age30)

const ageer = persons.reduce(function (acc,curr){
        if(acc[curr.work]){
             acc[curr.work]+=1
        }
        else{
            acc[curr.work]=1
        }
            return acc
},{});

console.log(ageer)