const express = require('express')

const app = express();

app.get("/", (req,res) => {
    res.send(`
        <h1>99 Bottles of beer on the wall</h1>
        <a href="/98">Take one down, pass it around</a>`
        );
})

app.get("/:number_of_bottles", (req,res) => {
    let numberOfBottles = parseInt(req.params.number_of_bottles)
    if (numberOfBottles > 0){
    res.send(`
    <h1> ${numberOfBottles} Bottles of beer on the wall</h1>
    <a href="/${numberOfBottles-1}">Take one down, pass it around</a>`    
    );
    } else {
        res.send(`<a href="/">Start over</a>`)
    }
})

app.listen(3000, () => console.log('Hello From Pass It Around'));