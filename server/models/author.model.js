const mongoose  = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    authorName: {
        type: String,
        required: [true,'Please Enter Author Name'],
        minLength:[3,'need to be at least 3 letters']
    }

},{timestamps:true})

module.exports = mongoose.model('Author',AuthorSchema)



