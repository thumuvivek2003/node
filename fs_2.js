const {readFile,writeFile} = require('fs');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile(
            './content/result_sync.txt',
            `Here content : ${first} \n ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result,"Done");
            });
            console.log(result);
        })
        console.log(result);
    })