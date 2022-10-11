const mongoose = require('mongoose');

const folderSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Folder', folderSchema);