//Modules - Encapsulated Code (only shares minimum)
//CommonJS - every file is a module (by default)

//local
const secret = 'SUPER SECRET'

//Global, we can share with the rest of the application by using the module property object export.
const John = 'John'
const Peter = 'Peter'

//console.log(module)
module.exports = {John, Peter}
