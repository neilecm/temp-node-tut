const {readFile, writeFile} = require ('fs')

//we need to use a call back function in the readFile('file path', 'call back function')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
    writeFile('./content/result-async.txt', 
    `Here is the result: ${first}, ${second}`,
    (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(result)


    }
 )

    })
})








