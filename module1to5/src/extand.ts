// How to Extending Interfaces

interface bird{
    name:string
}
interface Eagle extends bird{
    color:string
} 

const mybird:Eagle={
 name:"Eagle",
 color:"Gray"
}

console.log(mybird)