const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/articles');
router.get('/',articleControllers.getAllArticles);
router.post('/',articleControllers.createArticle);
router.get('/search',articleControllers.searchArticle);
router.patch('/:id',articleControllers.editArtcile);
router.delete('/:id',articleControllers.deleteArticle);
module.exports = {router};