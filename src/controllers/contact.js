const Contact = require('../models/contact');
const contactCtrl = {};

contactCtrl.getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
}

contactCtrl.createContact = async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        owner: req.body.owner
    });
    await contact.save();
    res.json({
        'status': 'contacto guardado'
    });
};

contactCtrl.getContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
};

contactCtrl.editContact = async (req, res) => {
    const { id } = req.params;
    const contact = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        owner: req.body.owner
    };
    await Contact.findByIdAndUpdate(id, { $set: contact}, {new: true});
    res.json({status: ' empleado actualizado' });
};

contactCtrl.deleteContact = async (req, res) => {
    await Contact.findByIdAndRemove(req.params.id);
    res.json({status: 'empleado eliminado'});
}

module.exports = contactCtrl;