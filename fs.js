const {readFileSync,writeFileSync} = require('fs');
const text = readFileSync('./content/test.txt','utf8')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    "./content/res_sync.txt",
    `Here content : ${first} \n ${second}`,
    {flag:'a'}
)

// console.log(text,first,second);