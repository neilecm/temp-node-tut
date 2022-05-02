//OS built-in module
const os = require('os')

//set up info about current user
const user = os.userInfo() //simply invoke the function
console.log(user) //display the result from user through userInfo()

//method returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`)

//create a new object, setup properties and sets equal to the methods
const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
}

console.log(currentOS)
