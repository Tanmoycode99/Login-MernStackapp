const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./Models/user');
require('dotenv').config(); 

const app = express();

app.use(express.json());
app.use(cors());

const dbURL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/logindb";

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const PORT = process.env.PORT || 8080;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({ name: username })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json("Success");
          } else {
            res.json("The Password is Incorrect");
          }
        } else {
          res.json("No record Found");
        }
      });
});

app.post('/register', (req, res) => {
    userModel.create(req.body)
      .then(users => res.json(users))
      .catch(err => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
