const fs = require('fs');

function question1() {
    fs.readFile('./instructions.txt', (err, data) => {
        console.time('test')
        const directions = data.toString()
        const directionArray = directions.split('');
        const answer = directionArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.timeEnd('test')
        console.log(answer)
    })
}

function question2(x)  {
fs.readFile('./instructions.txt', (err, data) => {
        console.time('test2')
        const directions = data.toString()
        const directionArray = directions.split('');
    let counter = 0;
    let i = 0;
        const answer = directionArray.some((currentValue) => {
            if (currentValue === '(') {
                 counter += 1
            } else if (currentValue === ')') {
                counter -= 1
            }
            i++
            return counter < 0;
        }, 0)
        console.timeEnd('test2')
        console.log('Basement entered at: ', i)
    })
}



question1()
question2()