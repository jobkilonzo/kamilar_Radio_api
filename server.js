require('dotenv').config()
const express = require("express")
const programRouter = require("./routes/programs")
const app = express()
const mongoose = require("mongoose")
const PORT  = process.env.PORT || 3001

mongoose.connect(process.env.DATABASE_URL)
mongoose.set('strictQuery', true)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())
app.use("/programs", programRouter)
app.listen(PORT, () => console.log("Server started"))