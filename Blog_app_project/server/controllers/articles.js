const articleModel = require('../models/database').articleModel;
async function getAllArticles(req, res) {
    try {
        const data = await articleModel.find();
        console.log(data);
        return res.status(201).send(data);
    } catch (err) {
        return res.status(500).send({
            message: 'internal server error'
        })
    }
}
async function deleteArticle(req, res) {
    try {
        const id = req.params.id;
        await articleModel.deleteOne({ _id: id });
        return res.status(201).json({
            message: 'delete successfully'
        });
    }
    catch (err) {
        return res.status(500).send({
            message: 'internal server error'
        })
    }
}
async function editArtcile(req, res) {
    try {
        console.log('update');
        const id = req.params.id;
        const { title, category, descriptions } = req.body;
        await articleModel.updateOne({ _id:id }, { $set: { title: title, category: category, descriptions: descriptions,
        date:new Date() } });
        return res.status(201).send({
            message: 'edit successfully'
        })
    } catch (err) {
        console.log('error');
        return res.status(500).send({
            message: 'internal server error'
        })
    }
}
async function searchArticle(req, res) {
    const {key} = req.body;
    const data = await articleModel.find().sort({date:1});
    let ans = [];
    for(let obj of data){
        if(obj.title.indexOf(key)>=0 || obj.category.indexOf(key)>=0){
            ans.push(obj);
        }
    }
    console.log(ans);
    res.status(201).send(ans);

}
async function createArticle(req, res) {
    try {
        console.log(req.url);
        const { title, category, descriptions } = req.body;
        console.log(title,category,descriptions);
        console.log(category);
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
        let currentYear = date.getFullYear();
        //the date as DD-MM-YYYY 
        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
        console.log(currentDate);
        const article = new articleModel({
            title: title,
            category: category,
            descriptions: descriptions,
            date: new Date(),
            slug:req.url
        })
        await article.save();
        return res.status(201).send({
            message: 'article create successfully'
        })
    } catch (err) {
         return res.status(500).send({
             message: 'internal error'
         })
     }
}
module.exports = {createArticle,deleteArticle,editArtcile,searchArticle,getAllArticles};