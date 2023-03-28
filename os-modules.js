const os = require('os')

// Info about current user
const user = os.userInfo();
console.log(user.username);

// System uptime in seconds
console.log(`The system is uptime since ${os.uptime()} seconds`)

const currentOS = {
    name: os.type() ,
    release: os.release() ,
    totalMem:os.totalmem() ,
    freeMem : os.freemem() ,
    
}

console.log(currentOS);