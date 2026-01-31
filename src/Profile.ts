// stap-1
interface user{
    id:number;
    name:string;
    email:string;
}

// stap 2
interface Auth extends user {
    bio:string;
    post:string[];
}

// stap 3
type Status = "active" | "inactive" | "banned"

// stap 4 

const auth1:Auth ={
id:1,
name:"Monir_dev",
email:"monirmolla324@gamil.com",
bio:"i am a font-end devoloper",
post:["poat1","post2","post3"]
}

// stap 5 

const activeStatus:Status = "active"
console.log(auth1,activeStatus)