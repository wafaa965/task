const mongoose = require('mongoose')

const Event = mongoose.model('Event', {
    eventname: {
        type: String,
        required: true,
        trim: true

    },
    date: {
        type: Date,
        trim: true

    },
   
   
    description: {
        type: String,
        required: true,
        trim: true

    }
    
   
})

module.exports = Event;