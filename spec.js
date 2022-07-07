const os = require("os")

console.log("free mem",os.freemem()/1024/1024/1024)
console.log("free mem",os.totalmem()/1024/1024/1024)
console.log("OS version",os.version())
console.log("Processor",os.cpus())