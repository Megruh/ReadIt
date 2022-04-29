const controller = require('./controller.js')
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

//app.get('/', controller.landing)
//app.get('/home', controller.home)
//app.get('/library', controller.library)
//app.get('/genre/:genre', controller.genre)
app.post('/api/register', controller.register)
app.post('/api/login', cors(corsOptions), controller.login)
//app.get('/search/:searchTerm', controller.search)

const port = process.env.PORT || 3005

app.listen(port, () => console.log(`Listening on port 3005`))