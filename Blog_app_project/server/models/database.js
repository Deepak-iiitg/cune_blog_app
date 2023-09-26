const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
main().then(()=>console.log('db connected')).catch(err => console.log("error"));

async function main() {
  return await mongoose.connect('mongodb://127.0.0.1:27017/blog_app_project');
}

const artilceSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true
     },
     category:{
        type:String,
        required:true,
     },
     descriptions:{
         type:String,
         required:true
     },
     date:{
        type:Date,
        required:true,
     },
     slug:{
        type:String,
        required:true
     }
}) 
artilceSchema.plugin(mongoosePaginate);
const articleModel = mongoose.model('blog',artilceSchema);
module.exports = {articleModel};