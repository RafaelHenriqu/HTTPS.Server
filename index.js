const { MongoClient } = require("mongodb")
const URL = 'Sua url mongodb'
const Client = new MongoClient(URL)
const {createServer} = require("http")
const Data = Client.db("Data")
const Users = Data.collection("Users")
const Server = createServer(async (req,res)=>{
    const {method, url} = req
    if (method == "POST"){
        const Name = url.replace("/","")
        console.log(Name)
        Users.insertOne({
            name:Name
        })
        res.end("<h1>Success</h1>")
    }

    if (method == "GET"){
        let Results = JSON.stringify(await Users.find({}).toArray())
        res.setHeader("Content-Type", "application/json")
        res.end(Results)
    }
})
Server.listen(3000, ()=>{
    console.log("Starting!")
})