// contactsController.js

// Sample data for demonstration purposes
let contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  // Function to get all contacts
  const getAll = (req, res) => {
    res.json(contacts);
  };
  
  // Function to get a single contact by ID
  const getSingle = (req, res) => {
    const id = parseInt(req.params.id);
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  };
  
  // Function to create a new contact
  const createContact = (req, res) => {
    const { name, email } = req.body;
    const id = contacts.length + 1;
    const newContact = { id, name, email };
    contacts.push(newContact);
    res.status(201).json(newContact);
  };
  
  // Function to update an existing contact by ID
  const updateContact = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      contacts[contactIndex] = { id, name, email };
      res.json(contacts[contactIndex]);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  };
  
  // Function to delete a contact by ID
  const deleteContact = (req, res) => {
    const id = parseInt(req.params.id);
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      const deletedContact = contacts.splice(contactIndex, 1)[0];
      res.json(deletedContact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  };
  
  module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
  };
  