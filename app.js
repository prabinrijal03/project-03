const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const db = require('./config/db');
const Image = require('./model/user.model');

app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/images', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const photo = new Image({
    name: req.file.originalname,
    data: req.file.buffer,
    contentType: req.file.mimetype
  });
  await photo.save();
  res.send('Image saved successfully');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});
