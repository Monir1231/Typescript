// Union and Intersection types

// Union type

let value: string | number
type ProdctId = string | number
function getProduct (id:ProdctId){
    console.log(`facthing data with id ${id}`)
}
getProduct(3)


// intersection types

type user ={
    id:number;
    name:string
}

type admin ={
    isAdmin:boolean
}

type adminUser = user & admin

const userAdmin:adminUser ={
  id:3,
  name:"monir",
  isAdmin:true  
}