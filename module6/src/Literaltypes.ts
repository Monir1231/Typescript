// How to Define Literal types

type Action = "start" | "paush" | "submit" | "stop" | "reset"

// define 

function handleAction (action:Action){
    console.log(`Action: ${action}`)
}

handleAction("start")