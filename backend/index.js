const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("./Models/User")
require("dotenv").config();
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const path = require('path');


const PORT = 5000;

const secretKey = "jai shree Ram"

const app = express();

mongoose.connect(process.env.MONGODB_URI)
//Multer setup:

// Create a connection to MongoDB
const mongoURI = process.env.MONGODB_URI;
const conn = mongoose.createConnection(mongoURI);

// Initialize GridFS
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('resumes'); // Collection name for GridFS files
});

// Create a storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname);
            const fileInfo = {
                filename: filename,
                bucketName: 'resumes', // Bucket name should match the collection name
            };
            resolve(fileInfo);
        });
    }
});

const upload = multer({ storage });

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend working successfully");
});


app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ Username: username })
        if (!user) return res.send("Invalid Username")

        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) return res.send("Invalid Password")

        const token = JWT.sign({ id: user._id }, secretKey, { expiresIn: '1h' })

        res.send({ token })

    } catch (error) {
        console.log("Error occured in login", error)
        res.send('Server error')
    }

})


app.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    try {

        const existingUser = await UserModel.findOne({ Username: username })

        if (existingUser) return res.send("Username already exists")

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            Username: username,
            Email: email,
            Password: hashedPassword,
        })

        await newUser.save();

        const token = JWT.sign({ id: newUser._id }, secretKey, { expiresIn: '1h' })

        res.send({ token })

    } catch (error) {
        console.log("Error occured in registration", error)
        res.send("Server Error")
    }
})


app.get("/user", async (req, res) => {

    try {

        const user = UserModel.findById(req.user.id).select('-Password');
        if (!user) return res.status(404).send("User not found");

        res.send(user)
    } catch (error) {
        console.log("Error fetching user details", error)
        res.send(500).send("Server error")
    }

})

app.post('/upload', upload.single('resume'), (req, res) => {
    console.log('file uploaded successfully')
    res.status(201).send({ file: req.file });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
