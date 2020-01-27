const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true

    },
    
    
   
})

module.exports = Todo;