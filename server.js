const express = require('express')

const app = express();


app.get("/greeting", (req,res) => {
    res.send("Hello Stranger")
})


app.get("/greeting/:name", (req,res) => {
    let name = req.params.name;
    res.send("Whats up " + name)
});





app.listen(3000, () => console.log('Hello From Lab 2'));