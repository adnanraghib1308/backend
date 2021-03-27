const express = require('express');
const fetch = require("node-fetch");

const router = express.Router();

router.get('/:rollno', (req, res) => {
    fetch(`https://terriblytinytales.com/testapi?rollnumber=${req.params.rollno}`)
    .then((response) => response.text())
    .then(data => res.json({
        result: data
    }));
})

module.exports = router;
