const os = require('os');

// info about cur user
const user = os.userInfo();
console.log(user);



// returns system up time in secs
console.log(`The System upTime is: ${os.uptime()} Seconds`)

const currentos = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentos);