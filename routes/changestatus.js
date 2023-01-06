const Router = require("express").Router()
const client = require("../client")

Router.post("/",async function(req, res){
    let status = req.body.status
    client.user.setActivity(status)
})

module.exports = Router