// Type narrowing

function Log(value: string | number){
    if(typeof value === "string"){
        console.log(value.toUpperCase())
    } else{
        console.log(value.toFixed(2))
    }
}

Log("hi, i am adrin")
Log(1.556)


// more ex 

function processInput(input: string | number){
  if( typeof input === "number" ){
    console.log("parsed as number", input * 4)
  } else{
    console.log("parsed as string",input.trim())
  }
}

processInput("hay  h")
processInput(43)