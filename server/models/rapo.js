const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String
}, {
    collection: 'work'  // This explicitly sets the collection name to 'work'
});

const Work = mongoose.model('Work', WorkSchema);
module.exports = Work;
