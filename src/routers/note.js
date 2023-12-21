const express = require("express");
const Note = require("../models/note");
const router = express.Router();

router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).send(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
router.post('/notes', async(req,res)=>{
    const note=new Note(req.body);
    try {
        await note.save();
        res.status(201).send(note);
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
})

module.exports = router;
