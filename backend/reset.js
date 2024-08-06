const { Stamp } = require('../models/models'); // Adjust this path as needed
const sequelize = require('../config/database'); // Adjust this path as needed

async function resetStampsTable() {
    try {
        // Delete all records from the stamps table
        await Stamp.destroy({
            where: {},
            truncate: true
        });

        // Reset the auto-increment counter
        await sequelize.query("DELETE FROM sqlite_sequence WHERE name='stamps';");

        console.log('All stamps have been deleted and the table has been reset.');
    } catch (error) {
        console.error('Error resetting stamps table:', error);
    }
}

resetStampsTable();