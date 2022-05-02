//Modules - Encapsulated Code (only shares minimum)
//CommonJS - every file is a module (by default)


const names = require('./4-names')
//console.log(names)
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
//console.log(data)

//sayHi('Susan')
//sayHi(names.Peter)
//sayHi(names.John)