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

//@route POST api/items
//@desc Create new Items
//@access Public

router.post('/', (req, res) => {
    const newItem = new Items({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc Get ALL Items
//@access Public

router.delete('/:id', (req, res) => {
    Items.findById(req.params.id)
			.then(item => item.remove().then(() => res.json({success: true})))
			.catch(err => res.status(404).json({success: false}));
});


module.exports = router;
