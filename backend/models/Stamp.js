const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Stamp extends Model { }

Stamp.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    country: DataTypes.STRING(100),
    yearOfIssue: DataTypes.INTEGER,
    denomination: DataTypes.STRING(50),
    condition: DataTypes.STRING(50),
    catalogNumber: DataTypes.STRING(50),
    imageKey: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    collectionTag: DataTypes.STRING(100),
    genuine: DataTypes.TEXT,
    salesNotes: DataTypes.TEXT,
    generalNotes: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2),
    setId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Sets',
            key: 'id'
        }
    },
    // New fields
    exampleId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    knownCopies: DataTypes.INTEGER,
    conditionDescription: DataTypes.TEXT,
    certification: DataTypes.STRING,
    provenance: DataTypes.TEXT,
    saleHistory: DataTypes.STRING,
    maxPriceSold: DataTypes.DECIMAL(10, 2)
}, {
    sequelize,
    modelName: 'Stamp',
    timestamps: true,
    underscored: true
});

Stamp.associate = function (models) {
    Stamp.belongsTo(models.Set, { foreignKey: 'setId' });
};

module.exports = Stamp;