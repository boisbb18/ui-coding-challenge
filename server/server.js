const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const os = require('os');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client/public'));

app.listen(3000, () => {
  console.log('Listening on Port -> 3000');
});

app.post('/add',(req,res) => {
  fs.appendFile(path.join(__dirname, './data.txt'),JSON.stringify(req.body) + os.EOL,(err) => {
    if(err) {
      console.log('Error -->',err);
    } else{
      res.status(200).send('It works');      
    }
  })
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve('client/public/index.html'));
});