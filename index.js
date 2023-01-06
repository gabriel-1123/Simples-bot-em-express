const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./routes")
const app = express()
const client = require("./client")
const { token } = require("./config.json") 

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.use('/api',routes)

app.listen(8080, () => console.log("ligado em 8080"))

client.login(token);

module.exports = client;