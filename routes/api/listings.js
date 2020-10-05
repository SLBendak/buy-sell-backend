require('dotenv').config();
const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
console.log(process.env);
const db = require('../../models');
const { default: Axios } = require('axios');
router.post('/list', (req, res) => {
    db.Listing.create(req.body)
    .then(listing => {
        const newListing = new Listing({
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            category: req.body.category,
            contact: req.body.contact,
            price: req.body.price
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

router.get('/listid/:id', (req, res) => {
    db.Listing.findById(req.params.id)
    .then(foundItem => {
        res.json(foundItem)
    })
    .catch(console.error)
})

router.get('/userlistings', (req, res) => {
    db.Listing.find()
    .then(userList => {
        res.json(userList)
    })
    .catch(console.error)
})

router.post('/delete/:id', (req, res) => {
    db.Listing.findByIdAndRemove(req.params.id)
    .then(res => {
        res.json(res)
    })
    .catch(console.error)
})

module.exports = router;