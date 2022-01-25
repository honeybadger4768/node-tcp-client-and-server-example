const net = require("net");
const server = net.createServer();
const colors = require("colors");


server.on("connection", (sc) =>{
    console.log("Bir socket bağlandı!", sc.remoteAddress+":"+sc.remotePort)
    sc.setTimeout(3000)
    sc.on("timeout", () =>{
        console.log("socket is timeouted".red)
        sc.end()
    })
    sc.on("data", async (data) =>{
        console.log(JSON.parse(data.toString()))
        switch(JSON.parse(data.toString()).action){
            case "getMessages":
                console.log("Mesaj çekilme isteği alındı!".green)
            break;
            case "writeMessage":
                console.log("Mesaj yazılma isteği alındı!");
            break;
            default:

            break;
        }
    })
})

server.listen({
    host: 'localhost',
    port: 80,
    exclusive: true
}, () =>{
    console.log("Server listening to", server.address());
})