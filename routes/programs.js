const express = require("express")
const router = express.Router()
const Program = require("../model/program")

// Get all programs
router.get("/", async (reg, res) => {
    try {
        const programs = await Program.find()
        res.json(programs)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

// creating one
router.post("/", async (req, res) => {
    const program = new Program({
        title: req.body.title,
        day: req.body.day,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    })

    try {
        const newProgram = await program.save()
        res.status(201).json(newProgram)
    } catch (err){
        res.status(400).json({err: err.message})
    }
})
// Updating one
router.patch("/:id", getProgram, async (reg, res) => {
    if(eq.body.title != null){
        res.program.title = req.body.title
    }
    if(eq.body.day != null){
        res.program.day = req.body.day
    }
    if(eq.body.startTime != null){
        res.program.startTime = req.body.startTime
    }
    if(eq.body.endTime != null){
        res.program.endTime = req.body.endTime
    }
    try {
        const updatedProgram = await res.program.save()
        res.json(updatedProgram)
    } catch(err) {
    res.status(400).json({message: err.message})
    }
})
// Deleting one
router.delete("/:id", getProgram, async (reg, res) => {
    try {
        await res.program.remove()
        res.json({message: "Deleted program"})
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getProgram(req, res, next){
    let program
    try {
        program = await Program.findById(req.params.id)
        if(program == null){
            return res.status(404).json({message: 'Cannot find program'})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.program  =  program
    next()
}

module.exports = router