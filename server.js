let express =  require('express')
let twilio = require('twilio')
let bodyParser = require('body-parser')

let app =  express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var accountSid = 'AC067a5e1514f4e1592f6a8912a4f84590'; // Your Account SID from www.twilio.com/console
var authToken = '971b883992a4bbd9d1d17f9a7e0d1960';   // Your Auth Token from www.twilio.com/console

const port = 8080

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/css/style.css')
})

app.get('/out_full.mp4', function(req, res) {
  res.sendFile(__dirname + '/media/output_full.mp4')
})

app.get('/materialize.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/materialize-css/dist/js/materialize.js')
})

app.get('/materialize.css', function(req, res) {
  res.sendFile(__dirname + '/node_modules/materialize-css/dist/css/materialize.css')
})

app.get('/highlight.min.js', function(req, res) {
  res.sendFile(__dirname + '/client/js/highlight.min.js')
})

app.get('/swiper.js', function(req, res) {
  res.sendFile(__dirname + '/client/js/swiper.js')
})

app.get('/swiper.css', function(req, res) {
  res.sendFile(__dirname + '/client/css/swiper.css')
})

app.get('/jquery.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.js')
})

app.get('/mod_hljs.js', function(req, res) {
  res.sendFile(__dirname + '/client/js/mod_hljs.js')
})

app.get('/submit_handler.js', function(req, res) {
  res.sendFile(__dirname + '/client/js/submit_handler.js')
})

app.post('/message', function(req, res) {
  console.log('got post to /message')
  var client = new twilio(accountSid, authToken);

  client.messages.create({
      body: req.body.name + " " + req.body.message,
      to: '+12623542930',
      from: '+12622394781'
  })
  .then((message) => console.log(message.sid));
  res.send({'status' : 'good'})
})

app.get('/clay00.jpg', function(req, res) {
  res.sendFile(__dirname + '/media/clay00.jpg')
})
app.get('/clay01.jpg', function(req, res) {
  res.sendFile(__dirname + '/media/clay01.jpg')
})
app.get('/clay02.jpg', function(req, res) {
  res.sendFile(__dirname + '/media/clay02.jpg')
})
app.get('/clay03.jpg', function(req, res) {
  res.sendFile(__dirname + '/media/clay03.jpg')
})
app.get('/clay04.jpg', function(req, res) {
  res.sendFile(__dirname + '/media/clay04.jpg')
})
app.get('/clay05.jpg', function(req, res) {
  res.sendFile(__dirname + '/media/clay05.jpg')
})
app.listen(port, () => {
  console.log('listening on ' + port)
})
