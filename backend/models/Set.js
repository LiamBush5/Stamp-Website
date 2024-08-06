// // const { Model, DataTypes } = require('sequelize');
// // const sequelize = require('../utils/db');

// // class Set extends Model { }

// // Set.init({
// //     name: {
// //         type: DataTypes.STRING,
// //         allowNull: false
// //     },
// //     description: {
// //         type: DataTypes.TEXT
// //     },
// //     yearOfIssue: DataTypes.INTEGER,
// //     country: DataTypes.STRING(100),
// //     catalogReference: DataTypes.STRING(100),
// //     additionalNotes: DataTypes.TEXT
// // }, {
// //     sequelize,
// //     modelName: 'Set',
// //     timestamps: true,
// //     underscored: true
// // });

// // Set.associate = function (models) {
// //     Set.hasMany(models.Stamp, { foreignKey: 'setId' });
// // };

// // module.exports = Set;

// // // set.js

// // // const { Model, DataTypes } = require('sequelize');
// // // const sequelize = require('../utils/db');

// // // class Set extends Model { }

// // // Set.init({
// // //     name: {
// // //         type: DataTypes.STRING,
// // //         allowNull: false
// // //     },
// // //     description: {
// // //         type: DataTypes.TEXT
// // //     },
// // //     yearOfIssue: DataTypes.INTEGER,
// // //     country: DataTypes.STRING(100),
// // //     catalogReference: DataTypes.STRING(100),
// // //     additionalNotes: DataTypes.TEXT,
// // //     parentFolderId: {
// // //         type: DataTypes.INTEGER,
// // //         allowNull: true,
// // //         references: {
// // //             model: 'Sets',
// // //             key: 'id'
// // //         }
// // //     },
// // //     ancestorFolders: DataTypes.JSON
// // // }, {
// // //     sequelize,
// // //     modelName: 'Set',
// // //     timestamps: true,
// // //     underscored: true
// // // });

// // // Set.associate = function (models) {
// // //     Set.hasMany(models.Stamp, { foreignKey: 'setId' });
// // //     Set.belongsTo(models.Set, { as: 'ParentSet', foreignKey: 'parentFolderId' });
// // //     Set.hasMany(models.Set, { as: 'ChildSets', foreignKey: 'parentFolderId' });
// // // };

// // // module.exports = Set;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../utils/db');

// class Set extends Model { }

// Set.init({
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.TEXT
//     },
//     yearOfIssue: DataTypes.INTEGER,
//     country: DataTypes.STRING(100),
//     catalogReference: DataTypes.STRING(100),
//     additionalNotes: DataTypes.TEXT,
//     parentSetId: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//         references: {
//             model: 'Sets',
//             key: 'id'
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Set',
//     timestamps: true,
//     underscored: true
// });

// Set.associate = function (models) {
//     Set.hasMany(models.Stamp, { as: 'Stamps' }); // Note the capitalization here
//     Set.belongsTo(Set, { as: 'ParentSet', foreignKey: 'parentSetId' });
//     Set.hasMany(Set, { as: 'ChildSets', foreignKey: 'parentSetId' });
// };

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Set extends Model { }

Set.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    yearOfIssue: DataTypes.INTEGER,
    country: DataTypes.STRING(100),
    catalogReference: DataTypes.STRING(100),
    additionalNotes: DataTypes.TEXT,
    parentSetId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Sets',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Set',
    timestamps: true,
    underscored: true
});

Set.associate = function (models) {
    Set.hasMany(models.Stamp, {
        as: 'Stamps',
        foreignKey: 'setId'
    });
    Set.belongsTo(Set, {
        as: 'ParentSet',
        foreignKey: 'parentSetId'
    });
    Set.hasMany(Set, {
        as: 'ChildSets',
        foreignKey: 'parentSetId'
    });
};

module.exports = Set;