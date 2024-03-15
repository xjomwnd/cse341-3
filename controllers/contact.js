const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); // Assuming you have a Contact model defined

// Define routes for contacts
// Example route: Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Example route: Create a new contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Example route: Get a specific contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Example route: Update a contact by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }
    res.json(updatedContact);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Example route: Delete a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }
    res.json({ msg: 'Contact deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
