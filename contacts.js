const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);

  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = listContacts();
  const result = contacts.find((contact) => (contact.id = contactId));

  return result || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

// console.log(getContactById("AeHIrLTr6JkxGE6SN-0Rwq"));

module.exports = {
  listContacts,
  getContactById,
};
