// const Stamp = require('./Stamp');
// const Set = require('./Set');

// // Set up associations
// Stamp.associate({ Set });
// Set.associate({ Stamp });

// module.exports = { Stamp, Set };

// models.js

const Stamp = require('./Stamp');
const Set = require('./Set');

// Set up associations
Stamp.associate({ Set });
Set.associate({ Stamp, Set });

module.exports = { Stamp, Set };