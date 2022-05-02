const {readFileSync, writeFileSync} = require ('fs')
//const fs = require('fs') -> does the same like the above line

console.log('start')

//To use readFileSync, which is a method we have to set up two parameters: a path that specifies the file as well as what is the encoding,
//so the node knows how to decode the file. Usually we use utf8
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
`Here is the result: ${first}, ${second}`,
{flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')


