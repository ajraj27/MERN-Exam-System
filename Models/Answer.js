const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const AnswerSchema=new Schema({
    capital:{
        type:String,
        required:true
    },
    selectedTeams:{
        type:[String],
        required:true
    },
    selectedPM:{
        type:[String],
        required:true
    },
    selectedOddOne:{
        type:[String],
        required:true
    },
    selectedLinuxOS:{
        type:[String],
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

module.exports = Answer = mongoose.model("answer", AnswerSchema);
