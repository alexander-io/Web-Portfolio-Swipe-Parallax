let express =  require('express')
let app =  express()

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

app.listen(port, () => {
  console.log('listening on ' + port)
})
