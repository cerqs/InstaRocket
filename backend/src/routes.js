const express = require('express');
const PostControler = require('./controllers/PostController');
const LikeControler = require('./controllers/LikeController');
const multer = require('multer');
const uploadConfig = require ('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);


routes.get('/getposts',  PostControler.index);
routes.post('/posts', upload.single('image'), PostControler.store);
routes.post('/like/:id', LikeControler.store);


module.exports = routes;