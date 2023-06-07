const argv = require("yargs").argv;

const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "getById":
      const oneContact = await contacts.getContactById(id);
      return console.table(oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.table(removeContact);

    default:
      return console.log("Unknown action");
  }
};

invokeAction(argv);
