const input = require('prompt-sync')();

let Choice = require('./choices.js');
let Contacts = require('./contacts.js');

const main = () => {
    console.log("=============================================================================================================================");
    console.log(" 📞 MY SUPER AWESOME TELEPHONE BOOK! 🤙 ");
    console.log("=============================================================================================================================");
    console.log("1. Display the phone book");
    console.log("2. Display the favourties");
    console.log("3. Add a contact");
    console.log("4. Update a contact");
    console.log("5. remove a contact");
    const choice = input("Enter the corresponding number to your choice -> ");

    if(choice == 1) Choice.display(phoneBook); 
    if(choice == 2) Choice.favourites(phoneBook);
    if(choice == 3) Choice.addContact(phoneBook);
    if(choice == 4) Choice.updateContact(phoneBook);
    if(choice == 5) Choice.removeContact(phoneBook);
    if(choice <= 0 || choice > 5) console.log("Invalid Choice!");
}

main();

