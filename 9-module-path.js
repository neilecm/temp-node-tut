const path = require('path')
console.log(path.sep) //Displays our current platform separator

//path.join method joins a sequence of path segments method using the platform specific separator as the limiter and the second thing it does is to return a normalized resulting path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//path.basename() method returns the test.txt file, which is the base
const base = path.basename(filePath)
console.log(base)

//path.resolve() method returns an absolute path. It accepts a sequence of paths or path segments and resolves it into an absolute path.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)