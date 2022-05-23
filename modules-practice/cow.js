const cows = require('cowsay');


const talk = (text) => cows.say({
    text: "I'm a horse"
});

module.exports.speak = talk;