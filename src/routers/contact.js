const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');
// const Contact = require('../models/contact');
// const auth = require('../middleware/auth')
// const router = new express.Router()


router.get('/', contactCtrl.getContacts);
router.get('/:id', contactCtrl.getContact);
router.post('/', contactCtrl.createContact);
router.put('/:id', contactCtrl.editContact);
router.delete('/:id', contactCtrl.deleteContact);


module.exports = router;