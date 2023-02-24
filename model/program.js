const mongoose = require("mongoose")

const programSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    day: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Program", programSchema)