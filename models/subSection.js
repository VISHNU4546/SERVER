const mongoose  = require("mongoose");


const subSection = new mongoose.Schema({
    titel:{
        type:String,

    },
    timeDuration:{
        type:String
    },
    descripation:{
        type:String,
    },
    videoUrl:{
        type:String,
    }

});

module.exports = mongoose.model("subSection",subSection );