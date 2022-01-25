const net = require("net");

const client = new net.Socket();

client.connect({
    host: "localhost",
    port: "80",
}, () =>{
    console.log("client bağlandı!")
})

client.on("data", (data) =>{
    console.log(data.toString())
})
client.on("end", (s) =>{
   
})
//client.write(Buffer.from(JSON.stringify({username: "honey", message: "msg"})))
client.write(JSON.stringify({action: "getMessages"}))
