const express = require("express");

const app = express();
const magicAnswers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/greeting", (req, res) => {
  res.send("Hello Stranger");
});

app.get("/greeting/:name", (req, res) => {
  let name = req.params.name;
  res.send("Whats up " + name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let total = req.params.total;
  let tipPercentage = req.params.tipPercentage;
  res.send("Amount is " + total * (tipPercentage / 100));
});

app.get('/magic/:prompt', (req,res) => {
    let prompt = req.params.prompt;
    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    let randomElement = getRandomElement(magicAnswers);
    res.send(prompt + " ? " + `<h1>${randomElement}</h1>`)
})



app.listen(3000, () => console.log("Hello From Lab 2"));
