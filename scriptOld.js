const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Amreen, dont worry soon you will get a job😊💕👍')
})

app.listen(3000)




// var figlet = require("figlet");

// figlet("Amreen", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// // var oneLinerJoke = require('one-liner-joke');

// // var getRandomJoke = oneLinerJoke.getRandomJoke();
// // console.log(getRandomJoke)

// // //console.log("Hello");

