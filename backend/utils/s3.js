const AWS = require('aws-sdk');
require('dotenv').config();

console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID ? 'Set' : 'Not set');
console.log('AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY ? 'Set' : 'Not set');
console.log('AWS_REGION:', process.env.AWS_REGION);
console.log('AWS_S3_BUCKET_NAME:', process.env.AWS_S3_BUCKET_NAME);

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const uploadToS3 = (file) => {
    console.log('Entering uploadToS3 function');
    console.log('File:', file ? 'Received' : 'Not received');

    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    console.log('Bucket name:', bucketName);

    if (!bucketName) {
        console.error('Bucket name is not defined');
        throw new Error('Bucket name is not defined. Make sure AWS_S3_BUCKET_NAME is set in your environment variables.');
    }

    const params = {
        Bucket: bucketName,
        Key: `uploads/${Date.now()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype
    };

    console.log('Upload params:', JSON.stringify(params, null, 2));

    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                console.error('S3 upload error:', err);
                reject(err);
            } else {
                console.log('S3 upload successful. File URL:', data.Location);
                resolve(data.Location);
            }
        });
    });
};

const listFiles = async (bucketName, prefix = '') => {
    const params = {
        Bucket: bucketName,
        Prefix: prefix
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        return data.Contents.map(file => ({
            key: file.Key,
            lastModified: file.LastModified,
            size: file.Size
        }));
    } catch (error) {
        console.error('Error listing files:', error);
        throw error;
    }
};

const deleteFileFromS3 = async (key) => {
    console.log('Entering deleteFileFromS3 function');
    console.log('File key:', key);

    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    console.log('Bucket name:', bucketName);

    if (!bucketName) {
        console.error('Bucket name is not defined');
        throw new Error('Bucket name is not defined. Make sure AWS_S3_BUCKET_NAME is set in your environment variables.');
    }

    const params = {
        Bucket: bucketName,
        Key: key
    };

    console.log('Delete params:', JSON.stringify(params, null, 2));

    try {
        // First, check if the object exists
        await s3.headObject(params).promise();

        // If it exists, delete it
        await s3.deleteObject(params).promise();
        console.log('S3 delete successful. File key:', key);
        return true;
    } catch (error) {
        if (error.code === 'NotFound') {
            console.log('File not found in S3:', key);
            return false;
        }
        console.error('S3 delete error:', error);
        throw error;
    }
};
module.exports = {
    uploadToS3,
    listFiles,
    deleteFileFromS3
};

console.log('S3 utils loaded, exported functions:', Object.keys(module.exports));