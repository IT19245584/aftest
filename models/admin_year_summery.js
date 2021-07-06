const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSummerySchema = new Schema({
    year: {
        type: String,
        required: true,
        unique: true
    },
    Acceptedincome: {
        type: String,
        required: true
    },
    AcceptedExpence: {
        type: String,
        required: true,
    },
    ActualExpence: {
        type: String,
        required: true
    },
    Actualincome: {
        type: String,
        required: true
    },
}, {
timestamps: true
});
const year_summery_Schema = mongoose.model('system_year_summery', yearSummerySchema);
module.exports = year_summery_Schema;