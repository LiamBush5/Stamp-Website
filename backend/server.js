// // // // // // // // // const express = require('express');
// // // // // // // // // const sequelize = require('./utils/db');
// // // // // // // // // const User = require('./models/User');

// // // // // // // // // const app = express();
// // // // // // // // // const port = 3000;

// // // // // // // // // app.use(express.json());

// // // // // // // // // async function startServer() {
// // // // // // // // //     try {
// // // // // // // // //         await sequelize.authenticate();
// // // // // // // // //         console.log('Database connection has been established successfully.');

// // // // // // // // //         await sequelize.sync({ force: true });
// // // // // // // // //         console.log('All models were synchronized successfully.');

// // // // // // // // //         app.listen(port, () => {
// // // // // // // // //             console.log(`Server is running on port ${port}`);
// // // // // // // // //         });
// // // // // // // // //     } catch (error) {
// // // // // // // // //         console.error('Unable to connect to the database:', error);
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // startServer();

// // // // // // // // const express = require('express');
// // // // // // // // const sequelize = require('./utils/db');
// // // // // // // // const User = require('./models/User');
// // // // // // // // const s3Routes = require('./routes/s3');
// // // // // // // // require('dotenv').config();

// // // // // // // // const app = express();
// // // // // // // // const port = 3000;

// // // // // // // // app.use(express.json());
// // // // // // // // app.use('/s3', s3Routes);

// // // // // // // // async function startServer() {
// // // // // // // //     try {
// // // // // // // //         await sequelize.authenticate();
// // // // // // // //         console.log('Database connection has been established successfully.');

// // // // // // // //         await sequelize.sync({ force: true });
// // // // // // // //         console.log('All models were synchronized successfully.');

// // // // // // // //         app.listen(port, () => {
// // // // // // // //             console.log(`Server is running on port ${port}`);
// // // // // // // //         });
// // // // // // // //     } catch (error) {
// // // // // // // //         console.error('Unable to connect to the database:', error);
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // startServer();

// // // // // // // // const express = require('express');
// // // // // // // // const cors = require('cors');
// // // // // // // // const multer = require('multer');
// // // // // // // // const { uploadToS3 } = require('./utils/s3');
// // // // // // // // const sequelize = require('./utils/db');
// // // // // // // // const User = require('./models/User');
// // // // // // // // const s3Routes = require('./routes/s3');  // Make sure this path is correct



// // // // // // // // const app = express();
// // // // // // // // const port = 3000;

// // // // // // // // // Enable CORS for all routes
// // // // // // // // app.use(cors());

// // // // // // // // // Parse JSON bodies
// // // // // // // // app.use(express.json());

// // // // // // // // app.use('/s3', s3Routes);


// // // // // // // // // Configure multer for file uploads
// // // // // // // // const upload = multer({ storage: multer.memoryStorage() });

// // // // // // // // // S3 upload route
// // // // // // // // app.post('/s3/upload', upload.single('file'), async (req, res) => {
// // // // // // // //     try {
// // // // // // // //         if (!req.file) {
// // // // // // // //             return res.status(400).json({ error: 'No file uploaded' });
// // // // // // // //         }

// // // // // // // //         const { description } = req.body;
// // // // // // // //         const file = req.file;

// // // // // // // //         // Upload file to S3
// // // // // // // //         const fileUrl = await uploadToS3(file);

// // // // // // // //         // Here you might want to save the post information to your database
// // // // // // // //         // For example:
// // // // // // // //         // const post = await Post.create({ description, imageUrl: fileUrl });

// // // // // // // //         res.json({ description, fileUrl });
// // // // // // // //     } catch (error) {
// // // // // // // //         console.error('Error in file upload:', error);
// // // // // // // //         res.status(500).json({ error: 'File upload failed' });
// // // // // // // //     }
// // // // // // // // });

// // // // // // // // async function startServer() {
// // // // // // // //     try {
// // // // // // // //         await sequelize.authenticate();
// // // // // // // //         console.log('Database connection has been established successfully.');

// // // // // // // //         await sequelize.sync({ force: true });
// // // // // // // //         console.log('All models were synchronized successfully.');

// // // // // // // //         app.listen(port, () => {
// // // // // // // //             console.log(`Server is running on http://localhost:${port}`);
// // // // // // // //         });
// // // // // // // //     } catch (error) {
// // // // // // // //         console.error('Unable to connect to the database:', error);
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // startServer();

// // // // // // // const express = require('express');
// // // // // // // const cors = require('cors');
// // // // // // // const multer = require('multer');
// // // // // // // const { uploadToS3 } = require('./utils/s3');
// // // // // // // const sequelize = require('./utils/db');
// // // // // // // const User = require('./models/User');
// // // // // // // const Stamp = require('./models/Stamp');
// // // // // // // const s3Routes = require('./routes/s3');
// // // // // // // const stampRoutes = require('./routes/stamps');

// // // // // // // const app = express();
// // // // // // // const port = 5002;

// // // // // // // // Enable CORS for all routes
// // // // // // // app.use(cors());

// // // // // // // // Parse JSON bodies
// // // // // // // app.use(express.json());

// // // // // // // // Use routes
// // // // // // // app.use('/s3', s3Routes);
// // // // // // // app.use('/stamps', stampRoutes);

// // // // // // // // Configure multer for file uploads
// // // // // // // const upload = multer({ storage: multer.memoryStorage() });

// // // // // // // // Your existing /s3/upload route can be removed if it's now in s3Routes

// // // // // // // async function startServer() {
// // // // // // //     try {
// // // // // // //         await sequelize.authenticate();
// // // // // // //         console.log('Database connection has been established successfully.');

// // // // // // //         await sequelize.sync({ force: true });
// // // // // // //         console.log('All models were synchronized successfully.');

// // // // // // //         app.listen(port, () => {
// // // // // // //             console.log(`Server is running on http://localhost:${port}`);
// // // // // // //         });
// // // // // // //     } catch (error) {
// // // // // // //         console.error('Unable to connect to the database:', error);
// // // // // // //     }
// // // // // // // }

// // // // // // // startServer();

// // // // // // const express = require('express');
// // // // // // const cors = require('cors');
// // // // // // const multer = require('multer');
// // // // // // const sequelize = require('./utils/db');
// // // // // // const User = require('./models/User');
// // // // // // const Stamp = require('./models/Stamp');
// // // // // // const s3Routes = require('./routes/s3');
// // // // // // const stampRoutes = require('./routes/stamps');

// // // // // // const app = express();
// // // // // // const port = process.env.PORT || 5002;

// // // // // // // Enable CORS for all routes
// // // // // // app.use(cors());

// // // // // // // Parse JSON bodies
// // // // // // app.use(express.json());

// // // // // // // Use routes
// // // // // // app.use('/s3', s3Routes);
// // // // // // app.use('/stamps', stampRoutes);

// // // // // // // Configure multer for file uploads
// // // // // // const upload = multer({ storage: multer.memoryStorage() });

// // // // // // // Test route
// // // // // // app.get('/', (req, res) => {
// // // // // //     res.send('Hello from the Stamp Collection API!');
// // // // // // });

// // // // // // async function startServer() {
// // // // // //     try {
// // // // // //         await sequelize.authenticate();
// // // // // //         console.log('Database connection has been established successfully.');

// // // // // //         // Changed force: true to alter: true to prevent data loss
// // // // // //         await sequelize.sync({ alter: true });
// // // // // //         console.log('All models were synchronized successfully.');

// // // // // //         app.listen(port, () => {
// // // // // //             console.log(`Server is running on http://localhost:${port}`);
// // // // // //         });
// // // // // //     } catch (error) {
// // // // // //         console.error('Unable to connect to the database:', error);
// // // // // //     }
// // // // // // }

// // // // // // startServer();

// // // // // // module.exports = app; // This line allows you to import the app in test files if needed

// // // // // require('dotenv').config();
// // // // // const express = require('express');
// // // // // const cors = require('cors');
// // // // // const multer = require('multer');
// // // // // const sequelize = require('./utils/db');
// // // // // const User = require('./models/User');
// // // // // const Stamp = require('./models/Stamp');
// // // // // const s3Routes = require('./routes/s3');
// // // // // const stampRoutes = require('./routes/stamps');

// // // // // const app = express();
// // // // // const port = process.env.PORT || 5002;

// // // // // // Enable CORS for all routes
// // // // // app.use(cors());

// // // // // // Parse JSON bodies
// // // // // app.use(express.json());

// // // // // // Use routes with '/api' prefix
// // // // // app.use('/api/s3', s3Routes);
// // // // // app.use('/api/stamps', stampRoutes);

// // // // // // Configure multer for file uploads
// // // // // const upload = multer({ storage: multer.memoryStorage() });

// // // // // // Test route
// // // // // app.get('/api', (req, res) => {
// // // // //     res.send('Hello from the Stamp Collection API!');
// // // // // });

// // // // // async function startServer() {
// // // // //     try {

// // // // //         await sequelize.authenticate();
// // // // //         console.log('Database connection has been established successfully.');

// // // // //         // Changed force: true to alter: true to prevent data loss
// // // // //         await sequelize.sync({ alter: true });
// // // // //         console.log('All models were synchronized successfully.');

// // // // //         app.listen(port, '0.0.0.0', () => {
// // // // //             console.log(`Server is running on http://0.0.0.0:${port}`);
// // // // //         });
// // // // //     } catch (error) {
// // // // //         console.error('Unable to start the server:', error);
// // // // //         process.exit(1);
// // // // //     }
// // // // // }

// // // // // startServer();

// // // // // module.exports = app; // This line allows you to import the app in test files if needed

// // // // require('dotenv').config();
// // // // const express = require('express');
// // // // const cors = require('cors');
// // // // const multer = require('multer');
// // // // const sequelize = require('./utils/db');
// // // // const { Stamp, Set } = require('./models/models');  // Updated import
// // // // const s3Routes = require('./routes/s3');
// // // // const stampRoutes = require('./routes/stamps');

// // // // const app = express();
// // // // const port = process.env.PORT || 5002;

// // // // // Enable CORS for all routes
// // // // app.use(cors());

// // // // // Parse JSON bodies
// // // // app.use(express.json());

// // // // // Use routes with '/api' prefix
// // // // app.use('/api/s3', s3Routes);
// // // // app.use('/api/stamps', stampRoutes);

// // // // // Configure multer for file uploads
// // // // const upload = multer({ storage: multer.memoryStorage() });

// // // // // Test route
// // // // app.get('/api', (req, res) => {
// // // //     res.send('Hello from the Stamp Collection API!');
// // // // });

// // // // async function startServer() {
// // // //     try {
// // // //         await sequelize.authenticate();
// // // //         console.log('Database connection has been established successfully.');

// // // //         // Disable the creation of backup tables
// // // //         await sequelize.sync({ alter: true, backup: false });
// // // //         console.log('All models were synchronized successfully.');

// // // //         app.listen(port, '0.0.0.0', () => {
// // // //             console.log(`Server is running on http://0.0.0.0:${port}`);
// // // //         });
// // // //     } catch (error) {
// // // //         console.error('Unable to start the server:', error);
// // // //         process.exit(1);
// // // //     }
// // // // }

// // // // startServer();

// // // // module.exports = app; // This line allows you to import the app in test files if needed

// // // require('dotenv').config();
// // // const express = require('express');
// // // const cors = require('cors');
// // // const multer = require('multer');
// // // const sequelize = require('./utils/db');
// // // const { Stamp, Set } = require('./models/models');
// // // const s3Routes = require('./routes/s3');
// // // const stampRoutes = require('./routes/stamps');
// // // const setsRouter = require('./routes/sets');
// // // const app = express();
// // // const port = process.env.PORT || 5002;

// // // app.use(cors());
// // // app.use(express.json());
// // // app.use('/api/s3', s3Routes);
// // // app.use('/api/stamps', stampRoutes);
// // // app.use('/api/sets', setsRouter);

// // // const upload = multer({ storage: multer.memoryStorage() });

// // // app.get('/api', (req, res) => {
// // //     res.send('Hello from the Stamp Collection API!');
// // // });

// // // async function startServer() {
// // //     try {
// // //         await sequelize.authenticate();
// // //         console.log('Database connection has been established successfully.');

// // //         // Drop all tables and recreate them
// // //         await sequelize.drop();
// // //         console.log('All tables dropped.');

// // //         await sequelize.sync({ force: true });
// // //         console.log('All models were synchronized successfully.');

// // //         app.listen(port, '0.0.0.0', () => {
// // //             console.log(`Server is running on http://0.0.0.0:${port}`);
// // //         });
// // //     } catch (error) {
// // //         console.error('Unable to start the server:', error);
// // //         process.exit(1);
// // //     }
// // // }

// // // startServer();

// // // module.exports = app;

// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const multer = require('multer');
// // const sequelize = require('./utils/db');
// // const { Stamp, Set } = require('./models/models');
// // const s3Routes = require('./routes/s3');
// // const stampRoutes = require('./routes/stamps');
// // const setsRouter = require('./routes/sets');
// // const app = express();
// // const port = process.env.PORT || 5002;

// // app.use(cors());
// // app.use(express.json());
// // app.use('/api/s3', s3Routes);
// // app.use('/api/stamps', stampRoutes);
// // app.use('/api/sets', setsRouter);

// // const upload = multer({ storage: multer.memoryStorage() });

// // app.get('/api', (req, res) => {
// //     res.send('Hello from the Stamp Collection API!');
// // });

// // async function startServer() {
// //     try {
// //         await sequelize.authenticate();
// //         console.log('Database connection has been established successfully.');

// //         // Sync models without forcing recreation
// //         await sequelize.sync();
// //         console.log('All models were synchronized successfully.');

// //         app.listen(port, '0.0.0.0', () => {
// //             console.log(`Server is running on http://0.0.0.0:${port}`);
// //         });
// //     } catch (error) {
// //         console.error('Unable to start the server:', error);
// //         process.exit(1);
// //     }
// // }

// // startServer();

// // module.exports = app;

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const sequelize = require('./utils/db');
// const { Stamp, Set } = require('./models/models');
// const s3Routes = require('./routes/s3');
// const stampRoutes = require('./routes/stamps');
// const setsRouter = require('./routes/sets');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 5002;

// app.use(cors());
// app.use(express.json());
// app.use('/api/s3', s3Routes);
// app.use('/api/stamps', stampRoutes);
// app.use('/api/sets', setsRouter);

// const upload = multer({ storage: multer.memoryStorage() });

// app.get('/api', (req, res) => {
//     res.send('Hello from the Stamp Collection API!');
// });

// async function recreateDatabase() {
//     console.log('Recreating database...');

//     // If using SQLite
//     if (sequelize.getDialect() === 'sqlite') {
//         const dbPath = path.resolve(__dirname, 'database.sqlite');
//         if (fs.existsSync(dbPath)) {
//             fs.unlinkSync(dbPath);
//             console.log('Existing database file deleted.');
//         }
//     } else {
//         // For other databases, drop all tables
//         await sequelize.drop();
//         console.log('All tables dropped.');
//     }

//     // Sync all models to create fresh tables
//     await sequelize.sync({ force: true });
//     console.log('Fresh database schema created.');
// }

// async function startServer() {
//     try {

//         await sequelize.authenticate();
//         console.log('Database connection has been established successfully.');

//         app.listen(port, '0.0.0.0', () => {
//             console.log(`Server is running on http://0.0.0.0:${port}`);
//         });
//     } catch (error) {
//         console.error('Unable to start the server:', error);
//         process.exit(1);
//     }
// }

// startServer();

// module.exports = app;

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const sequelize = require('./utils/db');
const { Stamp, Set } = require('./models/models');
const s3Routes = require('./routes/s3');
const stampRoutes = require('./routes/stamps');
const setsRouter = require('./routes/sets');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());
app.use('/api/s3', s3Routes);
app.use('/api/stamps', stampRoutes);
app.use('/api/sets', setsRouter);

const upload = multer({ storage: multer.memoryStorage() });

app.get('/api', (req, res) => {
    res.send('Hello from the Stamp Collection API!');
});

async function recreateDatabase() {
    console.log('Recreating database...');

    // If using SQLite
    if (sequelize.getDialect() === 'sqlite') {
        const dbPath = path.resolve(__dirname, 'database.sqlite');
        if (fs.existsSync(dbPath)) {
            fs.unlinkSync(dbPath);
            console.log('Existing database file deleted.');
        }
    } else {
        // For other databases, drop all tables
        await sequelize.drop();
        console.log('All tables dropped.');
    }

    // Sync all models to create fresh tables
    await sequelize.sync({ force: true });
    console.log('Fresh database schema created.');
}

async function startServer() {
    try {
        // Recreate the database before starting the server
        // await recreateDatabase();

        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        app.listen(port, '0.0.0.0', () => {
            console.log(`Server is running on http://0.0.0.0:${port}`);
        });
    } catch (error) {
        console.error('Unable to start the server:', error);
        process.exit(1);
    }
}

startServer();

module.exports = app;