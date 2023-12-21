const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/notes-api", {
    
}).then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("Error connecting to DB:", err);
    });
