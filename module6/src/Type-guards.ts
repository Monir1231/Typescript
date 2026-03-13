// Type guards

function Display(val:string | number){
 if( typeof val === 'string' ){
    console.log(" i am string:",val.toUpperCase())
 }else(
    console.log(" it's a number:",val.toFixed(2))
 )
}

Display("i am programmer")
Display(20.456)

// operator gruid 

type Car ={
   drive: ()=> void
}

type Boat ={
    sail: ()=> void
}

function Move(vehicle: Car | Boat){
   if("drive" in vehicle){
    vehicle.drive()
   } else{
    vehicle.sail()
   }
}

const car:Car ={
    drive: ()=>{
        console.log(" car is driving...")
    }
}

const boat:Boat ={
    sail: ()=>{
        console.log(" boat is driving...")
    }
}

Move(car)
Move(boat)


// instanceof

class Dog{
    bark(){
        console.log("woof woof")
    }
}

class Cat {
    meow(){
        console.log("meow meow")
    }
}

function makesound(animal:Dog | Cat){
    if(animal instanceof Dog){
        animal.bark()
    }else{
        animal.meow()
    }
}

const dog = new Dog()
const cat = new Cat()
makesound(dog)
makesound(cat)