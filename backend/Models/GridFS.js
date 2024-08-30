
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');
const path = require('path');

// Create a connection to MongoDB const mongoURI = 'mongodb://localhost:27017/your_database'; const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

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
