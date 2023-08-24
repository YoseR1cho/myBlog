// 建立
const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required: true
    },
    text:{
        type:String,
        required:true
    },
    time:Date
})

let ArticleModel =mongoose.model('articles',ArticleSchema);


module.exports = ArticleModel;