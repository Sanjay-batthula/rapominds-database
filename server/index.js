const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/rapo');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/rapo");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (password === user.password) {
                    res.json({ message: "Login Successfull" });
                } else {
                    res.json({ message: "Password is incorrect" });
                }
            } else {
                res.json({ message: "User not registered" });
            }
        })
        .catch(err => res.json(err)); // Add error handling for the promise
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.get('/employees', (req, res) => {
    EmployeeModel.find()
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});