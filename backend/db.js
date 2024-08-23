const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Cohort:jqfDombBCUqBmWrI@cluster0.wckfzvm.mongodb.net/paytm')
.then(() => console.log('Connected to MongoDB'))

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    lastname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    
  });

  const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

    const Account = mongoose.model('Account', accountSchema);
    const User =mongoose.model('User',userSchema);
  module.exports = {User,Account};