const express = require('express')
const app = express()

app.set("view engine","ejs");
app.use(express.static("./public"))
//app.use(express.static("./public"))

app.use(function(req,res,next){
    console.log("Middleware is working perfectly!");
    next();
})
// app.get('/', function (req, res) {
//   res.send('Hello Amreen')
// })


app.get('/', function (req, res) {
    res.render('index',{age:21})
  })

  app.get('/random', function (req, res) {
    res.render('random')
  })

app.get('/profile', function (req, res) {
    res.send('Hello from profile! "Shagufta Amreen"')
  })

  app.get('/profile2', function (req, res) {
    //res.send('Hello from profile! "Shagufta Amreen"')
    throw Error("I dont know!");
  })


  app.get('/profile/:username', function (req, res) {
    res.send(`${req.params.username} is using dynamic routing.`)
  })

  app.get('/error', function (req, res) {
    throw Error("Something went wrong!")
  })

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)