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



app.listen(port, () => {
  console.log('listening on ' + port)
})
