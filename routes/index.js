const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.render('movies', {allMovies})
    } catch (err) {
        console.log('Something went wrong!',err)
    }
})

router.get('/movie/:id', async (req, res) => {
    try { 
        const movieId = req.params.id
        const thisMovie = await Movie.findById(movieId)
        res.render('movie', {thisMovie})
    } catch (err) {
        console.log('Something went wrong!',err)
    }
})

module.exports = router;
