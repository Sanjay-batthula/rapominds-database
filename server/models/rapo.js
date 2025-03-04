const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    domain: {
        type: String,
        required: true,
        enum: ['ai', 'web', 'mobile', 'other']
    },
    description: {
        type: String,
        required: true
    },
    completionDate: {
        type: Date,
        required: true
    }
}, {
    collection: 'work'  // This explicitly sets the collection name to 'work'
});

const Work = mongoose.model('Work', WorkSchema);
module.exports = Work;
