const fs = require("fs")
const dir = "./files"

fs.mkdir(dir,(err)=>{
    console.log("folder created")
})


const quote = "No pain No gain"

for(let i=0;i<10;i++){
    fs.writeFile(`./${dir}/file-${i}.html`, quote, (err)=>{
        console.log(`FILE-${i} created`)
    })
}
