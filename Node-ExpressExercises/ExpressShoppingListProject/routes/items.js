const express = require("express");
const router = new express.Router();
const items = require("../fakeDb");//import your in-memory array

//GET /items
router.get("/", (req, res) => {
    return res.json(items);
});

//POST /items
router.post('/',(req,res) => {
        const {name, price} = req.body;

        if (name && price) {
            items.push({ name, price});
            res.status(201).json({message: "Item added", item: { name, price} });
        } else {
            res.status(404).send('Missing name or price');
        }
    })

//GET /items/:name
router.get('/:name', (req, res) => {
        const itemName = req.params.name;

        const foundItem = items.find(i => i.name.toLowerCase() === itemName.toLowerCase());

        if (foundItem) {
            res.json(foundItem);
        } else {
            res.status(404).json({error: "Item not found"});
        }
    })
//PATCH /items/:name
router.patch('/:name',(req, res) => {
        //which item
        const itemName = req.params.name;
        //what to update of that item
        const { name, price } = req.body;

        //find the item
        const item = items.find(i => i.name === itemName);

        //if no item is found, send error
        if (!item) {
            return res.status(404).json({error: "Item not found"});
        }

        //item {name or price} is now equal to the new price or name
        if (name) item.name = name;
        if (price) item.price = price;
        //return the item json
        res.json({ updated: item });
    })

//DELETE /items/:name
router.delete('/:name',(req, res) => {
        //which item
        const itemName = req.params.name;
        //check if item exists
        const itemIndex = items.findIndex(i => i.name.toLowerCase() === itemName.toLowerCase());
        //if item not found
        if (itemIndex === -1) {
            return res.status(404).json({error: "Item not found"});
        }
        //remove the item from the array, starting with itemIndex
        items.splice(itemIndex, 1);
        //send back some kind of confirmation
        res.json({message: "Deleted successfully"});
    });

module.exports = router;