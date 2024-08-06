// // // const express = require('express');
// // // const router = express.Router();
// // // const { uploadToS3 } = require('../utils/s3');
// // // const Stamp = require('../models/Stamp');
// // // const multer = require('multer');
// // // const upload = multer({ storage: multer.memoryStorage() });

// // // router.post('/', upload.single('image'), async (req, res) => {
// // //     try {
// // //         const {
// // //             title, description, country, yearOfIssue, denomination,
// // //             condition, catalogNumber, collectionTag
// // //         } = req.body;
// // //         const file = req.file;

// // //         let imageKey, imageUrl;
// // //         if (file) {
// // //             imageKey = `stamps/${Date.now()}-${file.originalname}`;
// // //             imageUrl = await uploadToS3(file);
// // //         }

// // //         const stamp = await Stamp.create({
// // //             title,
// // //             description,
// // //             country,
// // //             yearOfIssue,
// // //             denomination,
// // //             condition,
// // //             catalogNumber,
// // //             imageKey,
// // //             imageUrl,
// // //             collectionTag
// // //         });

// // //         res.status(201).json(stamp);
// // //     } catch (error) {
// // //         console.error('Error creating stamp:', error);
// // //         res.status(500).json({ error: 'Failed to create stamp' });
// // //     }
// // // });

// // // router.get('/collection/:tag', async (req, res) => {
// // //     try {
// // //         const { tag } = req.params;
// // //         const stamps = await Stamp.findAll({
// // //             where: { collectionTag: tag }
// // //         });
// // //         res.json(stamps);
// // //     } catch (error) {
// // //         console.error('Error fetching stamps:', error);
// // //         res.status(500).json({ error: 'Failed to fetch stamps' });
// // //     }
// // // });

// // // module.exports = router;

// // const express = require('express');
// // const router = express.Router();
// // const { uploadToS3 } = require('../utils/s3');
// // const Stamp = require('../models/Stamp');
// // const multer = require('multer');
// // const upload = multer({ storage: multer.memoryStorage() });

// // router.post('/', upload.single('image'), async (req, res) => {
// //     try {
// //         const {
// //             title, description, country, yearOfIssue, denomination,
// //             condition, catalogNumber, collectionTag
// //         } = req.body;
// //         const file = req.file;

// //         let imageKey, imageUrl;
// //         if (file) {
// //             imageKey = `stamps/${Date.now()}-${file.originalname}`;
// //             imageUrl = await uploadToS3(file);
// //         }

// //         const stamp = await Stamp.create({
// //             title,
// //             description,
// //             country,
// //             yearOfIssue,
// //             denomination,
// //             condition,
// //             catalogNumber,
// //             imageKey,
// //             imageUrl,
// //             collectionTag
// //         });

// //         res.status(201).json(stamp);
// //     } catch (error) {
// //         console.error('Error creating stamp:', error);
// //         res.status(500).json({ error: 'Failed to create stamp' });
// //     }
// // });

// // // Get all stamps
// // router.get('/', async (req, res) => {
// //     try {
// //         const stamps = await Stamp.findAll();
// //         res.json(stamps);
// //     } catch (error) {
// //         console.error('Error fetching stamps:', error);
// //         res.status(500).json({ error: 'Failed to fetch stamps' });
// //     }
// // });

// // // Get a specific stamp by ID
// // router.get('/:id', async (req, res) => {
// //     try {
// //         const stamp = await Stamp.findByPk(req.params.id);
// //         if (stamp) {
// //             res.json(stamp);
// //         } else {
// //             res.status(404).json({ error: 'Stamp not found' });
// //         }
// //     } catch (error) {
// //         console.error('Error fetching stamp:', error);
// //         res.status(500).json({ error: 'Failed to fetch stamp' });
// //     }
// // });

// // // Update a stamp
// // router.put('/:id', upload.single('image'), async (req, res) => {
// //     try {
// //         const stamp = await Stamp.findByPk(req.params.id);
// //         if (!stamp) {
// //             return res.status(404).json({ error: 'Stamp not found' });
// //         }

// //         const {
// //             title, description, country, yearOfIssue, denomination,
// //             condition, catalogNumber, collectionTag
// //         } = req.body;
// //         const file = req.file;

// //         let imageKey, imageUrl;
// //         if (file) {
// //             imageKey = `stamps/${Date.now()}-${file.originalname}`;
// //             imageUrl = await uploadToS3(file);
// //         }

// //         await stamp.update({
// //             title,
// //             description,
// //             country,
// //             yearOfIssue,
// //             denomination,
// //             condition,
// //             catalogNumber,
// //             imageKey: imageKey || stamp.imageKey,
// //             imageUrl: imageUrl || stamp.imageUrl,
// //             collectionTag
// //         });

// //         res.json(stamp);
// //     } catch (error) {
// //         console.error('Error updating stamp:', error);
// //         res.status(500).json({ error: 'Failed to update stamp' });
// //     }
// // });

// // // Delete a stamp
// // router.delete('/:id', async (req, res) => {
// //     try {
// //         const stamp = await Stamp.findByPk(req.params.id);
// //         if (!stamp) {
// //             return res.status(404).json({ error: 'Stamp not found' });
// //         }

// //         await stamp.destroy();
// //         res.json({ message: 'Stamp deleted successfully' });
// //     } catch (error) {
// //         console.error('Error deleting stamp:', error);
// //         res.status(500).json({ error: 'Failed to delete stamp' });
// //     }
// // });

// // // Get stamps by collection tag
// // router.get('/collection/:tag', async (req, res) => {
// //     try {
// //         const { tag } = req.params;
// //         const stamps = await Stamp.findAll({
// //             where: { collectionTag: tag }
// //         });
// //         res.json(stamps);
// //     } catch (error) {
// //         console.error('Error fetching stamps:', error);
// //         res.status(500).json({ error: 'Failed to fetch stamps' });
// //     }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { uploadToS3 } = require('../utils/s3');
// const Stamp = require('../models/Stamp');
// const multer = require('multer');
// const upload = multer({ storage: multer.memoryStorage() });

// router.post('/', upload.single('image'), async (req, res) => {
//     try {
//         const {
//             title, description, country, yearOfIssue, denomination,
//             condition, catalogNumber, collectionTag, genuine, salesNotes,
//             generalNotes, price
//         } = req.body;
//         const file = req.file;

//         let imageKey, imageUrl;
//         if (file) {
//             imageKey = `stamps/${Date.now()}-${file.originalname}`;
//             imageUrl = await uploadToS3(file);
//         }

//         const stamp = await Stamp.create({
//             title,
//             description,
//             country,
//             yearOfIssue,
//             denomination,
//             condition,
//             catalogNumber,
//             imageKey,
//             imageUrl,
//             collectionTag,
//             genuine,
//             salesNotes,
//             generalNotes,
//             price: parseFloat(price)
//         });

//         res.status(201).json(stamp);
//     } catch (error) {
//         console.error('Error creating stamp:', error);
//         res.status(500).json({ error: 'Failed to create stamp' });
//     }
// });

// // Get all stamps
// router.get('/', async (req, res) => {
//     try {
//         const stamps = await Stamp.findAll();
//         res.json(stamps);
//     } catch (error) {
//         console.error('Error fetching stamps:', error);
//         res.status(500).json({ error: 'Failed to fetch stamps' });
//     }
// });

// // Get a specific stamp by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const stamp = await Stamp.findByPk(req.params.id);
//         if (stamp) {
//             res.json(stamp);
//         } else {
//             res.status(404).json({ error: 'Stamp not found' });
//         }
//     } catch (error) {
//         console.error('Error fetching stamp:', error);
//         res.status(500).json({ error: 'Failed to fetch stamp' });
//     }
// });

// // Update a stamp
// router.put('/:id', upload.single('image'), async (req, res) => {
//     try {
//         const stamp = await Stamp.findByPk(req.params.id);
//         if (!stamp) {
//             return res.status(404).json({ error: 'Stamp not found' });
//         }

//         const {
//             title, description, country, yearOfIssue, denomination,
//             condition, catalogNumber, collectionTag, genuine, salesNotes,
//             generalNotes, price
//         } = req.body;
//         const file = req.file;

//         let imageKey, imageUrl;
//         if (file) {
//             imageKey = `stamps/${Date.now()}-${file.originalname}`;
//             imageUrl = await uploadToS3(file);
//         }

//         await stamp.update({
//             title,
//             description,
//             country,
//             yearOfIssue,
//             denomination,
//             condition,
//             catalogNumber,
//             imageKey: imageKey || stamp.imageKey,
//             imageUrl: imageUrl || stamp.imageUrl,
//             collectionTag,
//             genuine,
//             salesNotes,
//             generalNotes,
//             price: parseFloat(price)
//         });

//         res.json(stamp);
//     } catch (error) {
//         console.error('Error updating stamp:', error);
//         res.status(500).json({ error: 'Failed to update stamp' });
//     }
// });

// // Delete a stamp
// router.delete('/:id', async (req, res) => {
//     try {
//         const stamp = await Stamp.findByPk(req.params.id);
//         if (!stamp) {
//             return res.status(404).json({ error: 'Stamp not found' });
//         }

//         await stamp.destroy();
//         res.json({ message: 'Stamp deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting stamp:', error);
//         res.status(500).json({ error: 'Failed to delete stamp' });
//     }
// });

// // Get stamps by collection tag
// router.get('/collection/:tag', async (req, res) => {
//     try {
//         const { tag } = req.params;
//         const stamps = await Stamp.findAll({
//             where: { collectionTag: tag }
//         });
//         res.json(stamps);
//     } catch (error) {
//         console.error('Error fetching stamps:', error);
//         res.status(500).json({ error: 'Failed to fetch stamps' });
//     }
// });

// router.get('/edit/:id', async (req, res) => {
//     try {
//         const stamp = await Stamp.findByPk(req.params.id);
//         if (stamp) {
//             res.json(stamp);
//         } else {
//             res.status(404).json({ error: 'Stamp not found' });
//         }
//     } catch (error) {
//         console.error('Error fetching stamp for edit:', error);
//         res.status(500).json({ error: 'Failed to fetch stamp for editing' });
//     }
// });


// module.exports = router;

const express = require('express');
const router = express.Router();
const { uploadToS3 } = require('../utils/s3');
const Stamp = require('../models/Stamp');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });


router.post('/', upload.single('image'), async (req, res) => {
    try {
        console.log('Received stamp data:', req.body);

        const {
            title, description, country, yearOfIssue, denomination,
            condition, catalogNumber, collectionTag, genuine, salesNotes,
            generalNotes, price, setId, exampleId, knownCopies,
            conditionDescription, certification, provenance, saleHistory, maxPriceSold
        } = req.body;

        const file = req.file;

        let imageKey, imageUrl;
        if (file) {
            imageKey = `uploads/${Date.now()}-${file.originalname}`;
            imageUrl = await uploadToS3(file);
        }

        const stamp = await Stamp.create({
            title,
            description,
            country,
            yearOfIssue: yearOfIssue ? parseInt(yearOfIssue) : null,
            denomination,
            condition,
            catalogNumber,
            imageKey,
            imageUrl,
            collectionTag,
            genuine,
            salesNotes,
            generalNotes,
            price: price ? parseFloat(price) : null,
            setId,
            exampleId,
            knownCopies: knownCopies ? parseInt(knownCopies) : null,
            conditionDescription,
            certification,
            provenance,
            saleHistory,
            maxPriceSold: maxPriceSold ? parseFloat(maxPriceSold) : null
        });

        res.status(201).json(stamp);
    } catch (error) {
        console.error('Error creating stamp:', error);
        res.status(500).json({ error: 'Failed to create stamp', details: error.message });
    }
});


// router.post('/', upload.single('image'), async (req, res) => {
//     try {
//         const {
//             title, description, country, yearOfIssue, denomination,
//             condition, catalogNumber, collectionTag, genuine, salesNotes,
//             generalNotes, price, exampleId, knownCopies, conditionDescription,
//             certification, provenance, saleHistory, folderIds, maxPriceSold
//         } = req.body;
//         const file = req.file;

//         let imageKey, imageUrl;
//         if (file) {
//             imageKey = `stamps/${Date.now()}-${file.originalname}`;
//             imageUrl = await uploadToS3(file);
//         }

//         const stamp = await Stamp.create({
//             title,
//             description,
//             country,
//             yearOfIssue,
//             denomination,
//             condition,
//             catalogNumber,
//             imageKey,
//             imageUrl,
//             collectionTag,
//             genuine,
//             salesNotes,
//             generalNotes,
//             price: parseFloat(price),
//             exampleId,
//             knownCopies: parseInt(knownCopies),
//             conditionDescription,
//             certification,
//             provenance,
//             saleHistory: JSON.parse(saleHistory),
//             folderIds: JSON.parse(folderIds),
//             maxPriceSold: parseFloat(maxPriceSold)
//         });

//         res.status(201).json(stamp);
//     } catch (error) {
//         console.error('Error creating stamp:', error);
//         res.status(500).json({ error: 'Failed to create stamp' });
//     }
// });

// Get all stamps
router.get('/', async (req, res) => {
    try {
        const stamps = await Stamp.findAll();
        res.json(stamps);
    } catch (error) {
        console.error('Error fetching stamps:', error);
        res.status(500).json({ error: 'Failed to fetch stamps' });
    }
});

// Get a specific stamp by ID
router.get('/:id', async (req, res) => {
    try {
        const stamp = await Stamp.findByPk(req.params.id);
        if (stamp) {
            res.json(stamp);
        } else {
            res.status(404).json({ error: 'Stamp not found' });
        }
    } catch (error) {
        console.error('Error fetching stamp:', error);
        res.status(500).json({ error: 'Failed to fetch stamp' });
    }
});

router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const stamp = await Stamp.findByPk(req.params.id);
        if (!stamp) {
            return res.status(404).json({ error: 'Stamp not found' });
        }

        const {
            title, certification, condition, provenance,
            saleHistory, maxPriceSold, knownCopies, setId
        } = req.body;
        const file = req.file;

        let imageKey, imageUrl;
        if (file) {
            imageKey = `stamps/${Date.now()}-${file.originalname}`;
            imageUrl = await uploadToS3(file);
        }

        await stamp.update({
            title,
            certification,
            condition,
            provenance,
            saleHistory,
            maxPriceSold: maxPriceSold ? parseFloat(maxPriceSold) : null,
            knownCopies: knownCopies ? parseInt(knownCopies) : null,
            setId,
            imageKey: imageKey || stamp.imageKey,
            imageUrl: imageUrl || stamp.imageUrl
        });

        res.json(stamp);
    } catch (error) {
        console.error('Error updating stamp:', error);
        res.status(500).json({ error: 'Failed to update stamp', details: error.message });
    }
});

// Delete a stamp
router.delete('/:id', async (req, res) => {
    try {
        const stamp = await Stamp.findByPk(req.params.id);
        if (!stamp) {
            return res.status(404).json({ error: 'Stamp not found' });
        }

        await stamp.destroy();
        res.json({ message: 'Stamp deleted successfully' });
    } catch (error) {
        console.error('Error deleting stamp:', error);
        res.status(500).json({ error: 'Failed to delete stamp' });
    }
});

// Get stamps by collection tag
router.get('/collection/:tag', async (req, res) => {
    try {
        const { tag } = req.params;
        const stamps = await Stamp.findAll({
            where: { collectionTag: tag }
        });
        res.json(stamps);
    } catch (error) {
        console.error('Error fetching stamps:', error);
        res.status(500).json({ error: 'Failed to fetch stamps' });
    }
});

// Get stamp for editing
router.get('/edit/:id', async (req, res) => {
    try {
        const stamp = await Stamp.findByPk(req.params.id);
        if (stamp) {
            res.json(stamp);
        } else {
            res.status(404).json({ error: 'Stamp not found' });
        }
    } catch (error) {
        console.error('Error fetching stamp for edit:', error);
        res.status(500).json({ error: 'Failed to fetch stamp for editing' });
    }
});

// New route: Get stamps by example ID
router.get('/example/:exampleId', async (req, res) => {
    try {
        const { exampleId } = req.params;
        const stamps = await Stamp.findAll({
            where: { exampleId: exampleId }
        });
        res.json(stamps);
    } catch (error) {
        console.error('Error fetching stamps by example ID:', error);
        res.status(500).json({ error: 'Failed to fetch stamps by example ID' });
    }
});

module.exports = router;