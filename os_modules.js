const os = require('os');
console.log(`System uptime is ${os.uptime()}`);
// info about current user
const user = os.userInfo();
console.log(user);

//method return the system uptime in seconds
console.log(`System uptime is ${os.uptime()}`);


const currentOS = {
    name : os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}


console.log(cur);