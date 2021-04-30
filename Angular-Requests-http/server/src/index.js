const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');


const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

const multipartyMiddleware = multipart ({uploadDir:'./uploads'});

app.post('./upload', multipartyMiddleware, (request, response) => {
  const files = request.files;
  console.log(files);
  response.json({message : "Files uploaded successfully"})
})

app.use((err, request, response, next) => response.json({error: err.message}));

app.listen(8000, () => {
  console.log("Server UP and RUNNING on port 8000");
});
