const changestatus = require("./changestatus.js")
const Router = require("express").Router()


Router.use('/changestatus', changestatus)

module.exports = Router