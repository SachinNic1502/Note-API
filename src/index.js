const express=require("express");
const NoteRouter=require("./routers/note")
require('./db/mongoose');
const app=express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(NoteRouter);

app.listen(3000,()=>{
    console.log("app is running");
})

    