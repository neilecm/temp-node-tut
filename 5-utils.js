//Modules - Encapsulated Code (only shares minimum)
//CommonJS - every file is a module (by default)

const sayHi = (name) => {
    console.log(`Hello World ${name}`)
}

module.exports = sayHi

