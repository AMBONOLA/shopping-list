const express = require('express');
const router = express.Router();

//Item Model
const Items = require('../../models/Items');


//@route GET api/items
//@desc Get ALL Items
//@access Public

router.get('/', (req, res) => {
    Items.find()
    .sort({ date: -1})
    .then(items => res.json(items)) 
});

module.exports = router;
