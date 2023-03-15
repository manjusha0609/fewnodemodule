console.log("welcome to node js")
// console.log("welcome to node js 2nd time")
// console.log("welcome to node js nodemon")
// const events=require('events')
// const util=require('util')
// let Person = function (name) {
//     this.name = name;
// }
// util.inherits(Person, events.EventEmitter)
// let cvr = new Person("CVR");
// let cse = new Person("CSE");

// let people = [cvr, cse]
// people.forEach((person) => {
//     person.on("eventname", () => {
//         console.log(person.name + " event emitted")
//     })
// })
// cse.emit("eventname", "welcome")
// cvr.emit("eventname",)


// console.log("-------OS package-------")
// const os = require('os')
// console.log(os.type())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.tmpdir())
// console.log(os.homedir())
// console.log(os.platform())
// console.log(os.version())

const fs = require('fs')

// const data = fs.readFileSync('abc.txt', 'utf-8')
// console.log(data)
// fs.writeFileSync('abc.txt', 'Welcome to file system implementation')
// fs.appendFileSync('abc.txt', " .this data is being appended")
// fs.writeFile('abc.txt', 'file system module', (err) => {
//     console.log(err)
// })
// fs.readFile('abc.txt', 'utf-8', (err,data) => {
//     console.log(data)
//     fs.writeFile('xyz.txt', data, (err) => {
//         // console.log(err)
//     })
//     fs.writeFile('pqr.txt',data,()=>{

//     })
//     fs.readFile('pqr.txt',(err,data)=>{
//         console.log("pqr contents:"+data)
//     })
// })

let readStream=fs.createReadStream("abc.txt","utf-8")
let writeStream=fs.createWriteStream("xyz.txt")
readStream.on("data",(chunk)=>{
    console.log(chunk)
    writeStream.write(chunk)
})

let http=require('http')
// let server=http.createServer((req,res)=>{
//     console.log(req.url)
//     console.log("server started");
//     res.write('welcome to HTTP server');
//     res.end();
// })
// server.listen(3000);
let server = http.createServer((req, res) => {
    if (req.url === '/abc') {
        let readStream = fs.createReadStream('abc.txt', 'utf-8')
        readStream.on('data', (chunk) => {
            res.write(chunk);
            res.end();
        })
    }
    if(req.url=== '/index'){
        let readStream= fs.createReadStream('index.html','utf-8')
        readStream.on('data',(chunk)=>{
            res.write(chunk);
            res.end();
        })
    }
})
server.listen(3000)