require('dotenv').config();
const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
console.log(process.env);
// Load User model
// const User = require('../../models/User');
const db = require('../../models');
const { default: Axios } = require('axios');
// const Listing = require('../../models/Listing');
router.post('/list', (req, res) => {
    db.Listing.create(req.body)
    .then(listing => {
        const newListing = new Listing({
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            category: req.body.category
        })
        newListing.save()
        console.log("new listing", db.Listing)
    })
    .catch(err => console.log(err))
})

router.get('/results', (req, res) => {

    db.Listing.find()
    .then(listings => {
        res.send(listings)
    })
    .catch(err => console.log(err))
})

module.exports = router;