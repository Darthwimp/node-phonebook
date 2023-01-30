const input = require('prompt-sync')();

function display(argument){
    console.log(argument);
}

function favourites(argument){
    for(let i = 0;i<argument.length;i++){
        if(argument[i].favourites != null) console.log(argument[i]);
    }
}

function addContact(argument){
    let newCallerTone = "";
    const newId = argument.length+1;
    const newName = input("enter new name -> ");
    const newNumber = input("enter new number -> ");
    let isFavourites = input("do you want them as your favourites? (y/n): ");
    let isCallerTone = input("which caller tone would you like to use? (enter d for default): ");
    (isFavourites == "n" || isFavourites=="N") ? isFavourites = null : isFavourites = "Favourite"; 
    (isCallerTone == "d" || isCallerTone=="D") ? newCallerTone ="Default" : newCallerTone = isCallerTone;
    argument.push({newId, newName,newNumber,isFavourites,newCallerTone});
    console.log(argument);
    console.log("Added successfully!");
}

function updateContact(argument){
    const sNo = input("Enter the serial no. of the contact you want to edit -> ");
    const newName = input("enter new name ->");
    const newNumber = input("enter new number ->");
    let isFavourites = input("added as a favourite?(y/n) -> ");
    (isFavourites="y") ? isFavourites = null : isFavourites = "Favourites";
    newCallerTone = input("Enter new caller tone-> ");
    argument[sNo] = {sNo,newName,newNumber,isFavourites,newCallerTone};
    console.log(argument[sNo]);
    console.log("Updated Successfully!");
}

function removeContact(argument){
    sId = input("Enter the serial number you want to remove -> ");
    argument.pop(argument[sId]);
    console.log(argument);
}

module.exports.display = display;
module.exports.favourites = favourites;
module.exports.addContact = addContact;
module.exports.updateContact = updateContact;
module.exports.removeContact = removeContact;