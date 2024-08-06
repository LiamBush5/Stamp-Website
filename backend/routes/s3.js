const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadToS3, listFiles, deleteFileFromS3 } = require('../utils/s3');

require('dotenv').config();

const upload = multer({ storage: multer.memoryStorage() });

// Existing routes
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        const { metadata } = req.body; // Optional metadata
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        const key = `uploads/${Date.now()}-${file.originalname}`;

        const fileUrl = await uploadToS3(file, bucketName, key, metadata);
        res.json({ success: true, fileUrl, key });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ success: false, error: 'Error uploading file' });
    }
});

router.get('/file/:key', async (req, res) => {
    try {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        const key = req.params.key;

        const url = await getSignedUrl(bucketName, key);
        res.json({ url });
    } catch (error) {
        console.error('Error getting signed URL:', error);
        res.status(500).json({ error: 'Error getting signed URL' });
    }
});

// New test route
router.get('/test', async (req, res) => {
    try {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        if (!bucketName) {
            throw new Error('AWS_S3_BUCKET_NAME is not set in environment variables');
        }

        const testFile = {
            buffer: Buffer.from('This is a test file for S3 upload'),
            originalname: 'test.txt',
            mimetype: 'text/plain'
        };

        const key = `test/${Date.now()}-test.txt`;

        const fileUrl = await uploadToS3(testFile, bucketName, key);
        res.json({ success: true, message: 'S3 test upload successful', fileUrl });
    } catch (error) {
        console.error('S3 test upload failed:', error);
        res.status(500).json({ success: false, message: 'S3 test upload failed', error: error.message });
    }
});

router.get('/list/:prefix?', async (req, res) => {
    try {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        const prefix = req.params.prefix || '';
        console.log('Listing files with prefix:', prefix);
        const files = await listFiles(bucketName, prefix);
        res.json({ success: true, files });
    } catch (error) {
        console.error('Error listing files:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

router.delete('/delete/:key(*)', async (req, res) => {
    try {
        const key = req.params.key;
        console.log('Attempting to delete file with key:', key);
        const deleted = await deleteFileFromS3(key);
        if (deleted) {
            res.json({ success: true, message: 'File deleted successfully' });
        } else {
            res.status(404).json({ success: false, message: 'File not found' });
        }
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;