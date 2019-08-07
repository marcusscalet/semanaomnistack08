const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type:String,
        require: true,
    },
    user:{
        type:String,
        required:true,
    },
    bio: String,
    avatar:{
        type:String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId, //formato do id do MongoDB
        ref: 'Dev', //estamos referenciando qual model
    }],
    dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
    }]
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);