// // const express = require('express');
// // const router = express.Router();
// // const Set = require('../models/Set');
// // const Stamp = require('../models/Stamp');



// // // Create a new set
// // router.post('/', async (req, res) => {
// //     try {
// //         const { name, description, yearOfIssue, country, catalogReference, additionalNotes } = req.body;
// //         const set = await Set.create({
// //             name, description, yearOfIssue, country, catalogReference, additionalNotes
// //         });
// //         res.status(201).json(set);
// //     } catch (error) {
// //         console.error('Error creating set:', error);
// //         res.status(500).json({ error: 'Failed to create set' });
// //     }
// // });

// // // Get all sets
// // router.get('/', async (req, res) => {
// //     try {
// //         const sets = await Set.findAll();
// //         res.json(sets);
// //     } catch (error) {
// //         console.error('Error fetching sets:', error);
// //         res.status(500).json({ error: 'Failed to fetch sets' });
// //     }
// // });

// // // Get a specific set by ID
// // router.get('/:id', async (req, res) => {
// //     try {
// //         const set = await Set.findByPk(req.params.id, {
// //             include: [{ model: Stamp }]
// //         });
// //         if (set) {
// //             res.json(set);
// //         } else {
// //             res.status(404).json({ error: 'Set not found' });
// //         }
// //     } catch (error) {
// //         console.error('Error fetching set:', error);
// //         res.status(500).json({ error: 'Failed to fetch set' });
// //     }
// // });

// // // Update a set
// // router.put('/:id', async (req, res) => {
// //     try {
// //         const set = await Set.findByPk(req.params.id);
// //         if (!set) {
// //             return res.status(404).json({ error: 'Set not found' });
// //         }
// //         const { name, description, yearOfIssue, country, catalogReference, additionalNotes } = req.body;
// //         await set.update({
// //             name, description, yearOfIssue, country, catalogReference, additionalNotes
// //         });
// //         res.json(set);
// //     } catch (error) {
// //         console.error('Error updating set:', error);
// //         res.status(500).json({ error: 'Failed to update set' });
// //     }
// // });

// // // Delete a set
// // router.delete('/:id', async (req, res) => {
// //     try {
// //         const set = await Set.findByPk(req.params.id);
// //         if (!set) {
// //             return res.status(404).json({ error: 'Set not found' });
// //         }
// //         await set.destroy();
// //         res.json({ message: 'Set deleted successfully' });
// //     } catch (error) {
// //         console.error('Error deleting set:', error);
// //         res.status(500).json({ error: 'Failed to delete set' });
// //     }
// // });

// // // Add a stamp to a set
// // router.post('/:setId/stamps/:stampId', async (req, res) => {
// //     try {
// //         const { setId, stampId } = req.params;
// //         const set = await Set.findByPk(setId);
// //         if (!set) {
// //             return res.status(404).json({ error: 'Set not found' });
// //         }
// //         const stamp = await Stamp.findByPk(stampId);
// //         if (!stamp) {
// //             return res.status(404).json({ error: 'Stamp not found' });
// //         }
// //         await stamp.update({ setId: set.id });
// //         const updatedSet = await Set.findByPk(setId, {
// //             include: [{ model: Stamp }]
// //         });
// //         res.json(updatedSet);
// //     } catch (error) {
// //         console.error('Error adding stamp to set:', error);
// //         res.status(500).json({ error: 'Failed to add stamp to set' });
// //     }
// // });

// // // Get all stamps in a set
// // router.get('/:setId/stamps', async (req, res) => {
// //     try {
// //         const { setId } = req.params;
// //         const set = await Set.findByPk(setId, {
// //             include: [{
// //                 model: Stamp,
// //                 attributes: ['id', 'title', 'description', 'yearOfIssue', 'country', 'denomination', 'condition', 'catalogNumber', 'imageUrl']
// //             }]
// //         });
// //         if (!set) {
// //             return res.status(404).json({ error: 'Set not found' });
// //         }
// //         res.json(set.Stamps);
// //     } catch (error) {
// //         console.error('Error fetching stamps in set:', error);
// //         res.status(500).json({ error: 'Failed to fetch stamps in set' });
// //     }
// // });

// // router.get('/undefined-stamps', async (req, res) => {
// //     try {
// //         const undefinedStamps = await Stamp.findAll({
// //             where: {
// //                 setId: null
// //             },
// //             attributes: ['id', 'title', 'description', 'yearOfIssue', 'country', 'denomination', 'condition', 'catalogNumber', 'imageUrl', 'setId']
// //         });
// //         res.json(undefinedStamps);
// //     } catch (error) {
// //         console.error('Error fetching undefined stamps:', error);
// //         res.status(500).json({ error: 'Failed to fetch undefined stamps' });
// //     }
// // });
// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Set = require('../models/Set');
// const Stamp = require('../models/Stamp');
// const { Op } = require('sequelize');

// // Create a new set
// router.post('/', async (req, res) => {
//     try {
//         const { name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId } = req.body;
//         const set = await Set.create({
//             name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId
//         });
//         res.status(201).json(set);
//     } catch (error) {
//         console.error('Error creating set:', error);
//         res.status(500).json({ error: 'Failed to create set' });
//     }
// });


// router.get('/', async (req, res) => {
//     try {
//         const sets = await Set.findAll({
//             where: {
//                 parentSetId: null // Only fetch top-level sets
//             },
//             include: [
//                 {
//                     model: Stamp,
//                     as: 'Stamps'
//                 },
//                 {
//                     model: Set,
//                     as: 'ChildSets',
//                     include: [
//                         {
//                             model: Stamp,
//                             as: 'Stamps'
//                         },
//                         {
//                             model: Set,
//                             as: 'ChildSets'
//                         }
//                     ]
//                 }
//             ],
//             order: [['id', 'ASC']]
//         });

//         res.json(sets);
//     } catch (error) {
//         console.error('Error fetching sets:', error);
//         res.status(500).json({ error: 'Failed to fetch sets', details: error.message });
//     }
// });

// // Get a specific set by ID with its stamps and child sets
// router.get('/:id', async (req, res) => {
//     try {
//         const set = await Set.findByPk(req.params.id, {
//             include: [
//                 { model: Stamp },
//                 { model: Set, as: 'ChildSets' },
//                 { model: Set, as: 'ParentSet' }
//             ]
//         });
//         if (set) {
//             res.json(set);
//         } else {
//             res.status(404).json({ error: 'Set not found' });
//         }
//     } catch (error) {
//         console.error('Error fetching set:', error);
//         res.status(500).json({ error: 'Failed to fetch set' });
//     }
// });

// // Update a set
// router.put('/:id', async (req, res) => {
//     try {
//         const set = await Set.findByPk(req.params.id);
//         if (!set) {
//             return res.status(404).json({ error: 'Set not found' });
//         }
//         const { name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId } = req.body;
//         await set.update({
//             name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId
//         });
//         res.json(set);
//     } catch (error) {
//         console.error('Error updating set:', error);
//         res.status(500).json({ error: 'Failed to update set' });
//     }
// });

// // Delete a set
// router.delete('/:id', async (req, res) => {
//     try {
//         const set = await Set.findByPk(req.params.id);
//         if (!set) {
//             return res.status(404).json({ error: 'Set not found' });
//         }
//         // Check if the set has child sets or stamps
//         const childSets = await Set.findAll({ where: { parentSetId: set.id } });
//         const stamps = await Stamp.findAll({ where: { setId: set.id } });

//         if (childSets.length > 0 || stamps.length > 0) {
//             return res.status(400).json({ error: 'Cannot delete set with child sets or stamps' });
//         }

//         await set.destroy();
//         res.json({ message: 'Set deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting set:', error);
//         res.status(500).json({ error: 'Failed to delete set' });
//     }
// });

// // Add a stamp to a set
// router.post('/:setId/stamps/:stampId', async (req, res) => {
//     try {
//         const { setId, stampId } = req.params;
//         const set = await Set.findByPk(setId);
//         if (!set) {
//             return res.status(404).json({ error: 'Set not found' });
//         }
//         const stamp = await Stamp.findByPk(stampId);
//         if (!stamp) {
//             return res.status(404).json({ error: 'Stamp not found' });
//         }
//         await stamp.update({ setId: set.id });
//         const updatedSet = await Set.findByPk(setId, {
//             include: [{ model: Stamp }]
//         });
//         res.json(updatedSet);
//     } catch (error) {
//         console.error('Error adding stamp to set:', error);
//         res.status(500).json({ error: 'Failed to add stamp to set' });
//     }
// });

// // Get all stamps in a set
// router.get('/:setId/stamps', async (req, res) => {
//     try {
//         const { setId } = req.params;
//         const set = await Set.findByPk(setId, {
//             include: [{
//                 model: Stamp,
//                 attributes: ['id', 'title', 'description', 'yearOfIssue', 'country', 'denomination', 'condition', 'catalogNumber', 'imageUrl']
//             }]
//         });
//         if (!set) {
//             return res.status(404).json({ error: 'Set not found' });
//         }
//         res.json(set.Stamps);
//     } catch (error) {
//         console.error('Error fetching stamps in set:', error);
//         res.status(500).json({ error: 'Failed to fetch stamps in set' });
//     }
// });

// // Get all stamps not in any set
// router.get('/undefined-stamps', async (req, res) => {
//     try {
//         const undefinedStamps = await Stamp.findAll({
//             where: {
//                 setId: null
//             },
//             attributes: ['id', 'title', 'description', 'yearOfIssue', 'country', 'denomination', 'condition', 'catalogNumber', 'imageUrl', 'setId']
//         });
//         res.json(undefinedStamps);
//     } catch (error) {
//         console.error('Error fetching undefined stamps:', error);
//         res.status(500).json({ error: 'Failed to fetch undefined stamps' });
//     }
// });

// // Get child sets of a set
// router.get('/:setId/children', async (req, res) => {
//     try {
//         const { setId } = req.params;
//         const childSets = await Set.findAll({
//             where: { parentSetId: setId },
//             include: [{ model: Set, as: 'ChildSets' }]
//         });
//         res.json(childSets);
//     } catch (error) {
//         console.error('Error fetching child sets:', error);
//         res.status(500).json({ error: 'Failed to fetch child sets' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Set = require('../models/Set');
const Stamp = require('../models/Stamp');
const { Op } = require('sequelize');


router.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
    next();
});


// Create a new set
router.post('/', async (req, res) => {
    try {
        const { name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId } = req.body;
        const set = await Set.create({
            name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId
        });
        res.status(201).json(set);
    } catch (error) {
        console.error('Error creating set:', error);
        res.status(500).json({ error: 'Failed to create set' });
    }
});

// Get all top-level sets with their children and stamps
router.get('/', async (req, res) => {
    try {
        const sets = await Set.findAll({
            where: {
                parentSetId: null // Only fetch top-level sets
            },
            include: [
                {
                    model: Stamp,
                    as: 'Stamps'
                },
                {
                    model: Set,
                    as: 'ChildSets',
                    include: [
                        {
                            model: Stamp,
                            as: 'Stamps'
                        },
                        {
                            model: Set,
                            as: 'ChildSets'
                        }
                    ]
                }
            ],
            order: [['id', 'ASC']]
        });

        res.json(sets);
    } catch (error) {
        console.error('Error fetching sets:', error);
        res.status(500).json({ error: 'Failed to fetch sets', details: error.message });
    }
});


router.get('/hierarchy-with-counts', async (req, res) => {
    try {
        const sets = await Set.findAll({
            where: { parentSetId: null },
            include: [
                { model: Stamp, as: 'Stamps' },
                {
                    model: Set,
                    as: 'ChildSets',
                    include: [
                        { model: Stamp, as: 'Stamps' },
                        { model: Set, as: 'ChildSets' }
                    ]
                }
            ],
            order: [['id', 'ASC']]
        });

        const formatSet = (set) => {
            let stampCount = set.Stamps.length;
            const childSets = set.ChildSets.map(childSet => {
                const formattedChildSet = formatSet(childSet);
                stampCount += formattedChildSet.stampCount;
                return formattedChildSet;
            });

            return {
                id: set.id,
                name: set.name,
                stampCount: stampCount,
                childSets: childSets
            };
        };

        const formattedSets = sets.map(formatSet);

        res.json(formattedSets);
    } catch (error) {
        console.error('Error in /hierarchy-with-counts route:', error);
        res.status(500).json({ error: 'Failed to fetch sets with counts', details: error.message });
    }
});
// Get all stamps not in any set
router.get('/undefined-stamps', async (req, res) => {
    try {
        const undefinedStamps = await Stamp.findAll({
            where: {
                setId: null
            },
            attributes: ['id', 'title', 'description', 'yearOfIssue', 'country', 'denomination', 'condition', 'catalogNumber', 'imageUrl', 'setId']
        });
        res.json(undefinedStamps);
    } catch (error) {
        console.error('Error fetching undefined stamps:', error);
        res.status(500).json({ error: 'Failed to fetch undefined stamps' });
    }
});

// Get a specific set by ID with its stamps and child sets
router.get('/:id', async (req, res) => {
    try {
        const set = await Set.findByPk(req.params.id, {
            include: [
                {
                    model: Stamp,
                    as: 'Stamps'
                },
                {
                    model: Set,
                    as: 'ChildSets',
                    include: [
                        {
                            model: Stamp,
                            as: 'Stamps'
                        },
                        {
                            model: Set,
                            as: 'ChildSets'
                        }
                    ]
                },
                {
                    model: Set,
                    as: 'ParentSet'
                }
            ]
        });
        if (set) {
            res.json(set);
        } else {
            res.status(404).json({ error: 'Set not found' });
        }
    } catch (error) {
        console.error('Error fetching set:', error);
        res.status(500).json({ error: 'Failed to fetch set' });
    }
});

// Update a set
router.put('/:id', async (req, res) => {
    try {
        const set = await Set.findByPk(req.params.id);
        if (!set) {
            return res.status(404).json({ error: 'Set not found' });
        }
        const { name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId } = req.body;
        await set.update({
            name, description, yearOfIssue, country, catalogReference, additionalNotes, parentSetId
        });
        res.json(set);
    } catch (error) {
        console.error('Error updating set:', error);
        res.status(500).json({ error: 'Failed to update set' });
    }
});

// Delete a set
router.delete('/:id', async (req, res) => {
    try {
        const set = await Set.findByPk(req.params.id);
        if (!set) {
            return res.status(404).json({ error: 'Set not found' });
        }
        // Check if the set has child sets or stamps
        const childSets = await Set.findAll({ where: { parentSetId: set.id } });
        const stamps = await Stamp.findAll({ where: { setId: set.id } });

        if (childSets.length > 0 || stamps.length > 0) {
            return res.status(400).json({ error: 'Cannot delete set with child sets or stamps' });
        }

        await set.destroy();
        res.json({ message: 'Set deleted successfully' });
    } catch (error) {
        console.error('Error deleting set:', error);
        res.status(500).json({ error: 'Failed to delete set' });
    }
});

// Add a stamp to a set
router.post('/:setId/stamps/:stampId', async (req, res) => {
    try {
        const { setId, stampId } = req.params;
        const set = await Set.findByPk(setId);
        if (!set) {
            return res.status(404).json({ error: 'Set not found' });
        }
        const stamp = await Stamp.findByPk(stampId);
        if (!stamp) {
            return res.status(404).json({ error: 'Stamp not found' });
        }
        await stamp.update({ setId: set.id });
        const updatedSet = await Set.findByPk(setId, {
            include: [{ model: Stamp, as: 'Stamps' }]
        });
        res.json(updatedSet);
    } catch (error) {
        console.error('Error adding stamp to set:', error);
        res.status(500).json({ error: 'Failed to add stamp to set' });
    }
});

// Get all stamps in a set
router.get('/:setId/stamps', async (req, res) => {
    try {
        const { setId } = req.params;
        const set = await Set.findByPk(setId, {
            include: [{
                model: Stamp,
                as: 'Stamps',
                attributes: ['id', 'title', 'description', 'yearOfIssue', 'country', 'denomination', 'condition', 'catalogNumber', 'imageUrl']
            }]
        });
        if (!set) {
            return res.status(404).json({ error: 'Set not found' });
        }
        res.json(set.Stamps);
    } catch (error) {
        console.error('Error fetching stamps in set:', error);
        res.status(500).json({ error: 'Failed to fetch stamps in set' });
    }
});

// Get child sets of a set
router.get('/:setId/children', async (req, res) => {
    try {
        const { setId } = req.params;
        const childSets = await Set.findAll({
            where: { parentSetId: setId },
            include: [
                {
                    model: Set,
                    as: 'ChildSets',
                    include: [{ model: Stamp, as: 'Stamps' }]
                },
                { model: Stamp, as: 'Stamps' }
            ]
        });
        res.json(childSets);
    } catch (error) {
        console.error('Error fetching child sets:', error);
        res.status(500).json({ error: 'Failed to fetch child sets' });
    }
});



module.exports = router;