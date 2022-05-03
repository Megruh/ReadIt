const controller = require('./controller.js')
const path = require('path')
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const app = express()

app.use(express.json())

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
      maxAge: 1000 * 60 * 60 * 8
  }
}))

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
// app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });


app.post('/library', controller.library)
app.get('/library', controller.libShelves)
// app.get('/genre/:genre', controller.genre)
app.post('/api/register', controller.register)
app.post('/api/login', controller.login)
app.get('/api/user', controller.user)
//app.get('/search/:searchTerm', controller.search)

const port = process.env.PORT || 3005

app.listen(port, () => console.log(`Listening on port 3005`))