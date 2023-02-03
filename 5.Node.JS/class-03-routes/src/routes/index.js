const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.send('Home');
});

router.get('/blog', (req, res) => {
    res.send('Blog');
});

router.get('/contact', (req, res) => {
    res.send('Contact');
});

module.exports = router;