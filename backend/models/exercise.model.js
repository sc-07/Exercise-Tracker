const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type:String, required: true},
    description:{type:String, required:true},
    date:{type:Date, required:true},
    duration:{type:Number, required:true},
}, {
    timestamps: true,
});

const exercise= mongoose.model('exercise', userSchema);

module.exports= exercise;