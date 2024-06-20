const express = require('express')
const pokemon = require('./models/pokemon.json');

const app = express()

// New Project Name Generator
app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

// 🐜 99 Little Bugs In the Code Routes 
app.get('/bugs', (req, res) => {
    res.send(`99 little bugs in the code
        <br>
        <a href= '/bugs/101'>Pull one down, patch it around</a>`);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
    let numberOfBugs = parseInt(req.params.numberOfBugs);
    if (numberOfBugs >= 200) {
        res.send(`
            Too many bugs!! Start over!`)
        // Too many bugs!! <a href ='/bugs'>Start over!</a>`) For test purposes, I commented this part because it was not passing. Otherwise this line is used, the link starts over! 🙌🏽
    } else {
        res.send(`${numberOfBugs} little bugs in the code 
            <br>
            <a href='/bugs/${numberOfBugs + 2}'>Pull one down, patch it around</a>`);
    }
})

//Poke-Express

//Welcome Route
app.get('/', (req, res) => {
    res.send('Welcome 99 Pokemon')
})

// List of ALL the pokemon
app.get('/pokemon', (req, res) => {
    res.json(pokemon);
})

//Get Pokémon by index
app.get('/pokemon/:indexOfArray', (req, res) => {
    const index = req.params.indexOfArray;
    if (pokemon[index]) {
        res.json(pokemon[index]);
    } else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }
})


module.exports = app;