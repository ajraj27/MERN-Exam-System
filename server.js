require("dotenv").config()
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
//const path = require("path")

const Answer=require("./Models/Answer");

const app=express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ExamApp", { useNewUrlParser: true })
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

app.post("/saveData",(req,res) => {
    Answer.remove({}).then((err) => {
        if(err) 
            console.log(err);
    });

    const newAnswer = new Answer(req.body);
    newAnswer.save()
    .then(ans => res.send(ans))
    .catch(err => console.log(err));
});

app.get("/getData",async (req,res) => {
    const doc= await Answer.findOne({});
    res.send(doc);
})


//app.use("/routes/api/users", users);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(process.env.PORT || 5000,() => {
    console.log("App started.");
})
