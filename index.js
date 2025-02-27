// Name: Lara Franchesca N. Dy
// Student Number: 2023-16277
// Section: C3L

import { appendFileSync } from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

// function to generate unique id
function generateUniqueID(firstName, lastName){
// if not fname and lname return null
    if(!firstName || !lastName) return null;
// convert first letter of fname to lowercase
    const fname = firstName.charAt(0).toLowerCase();
// convert last name to lowercase
    const lname = lastName.toLowerCase();
// unique string
    const uniqueString = uuidv4().replace(/-/g," ").substring(0,8); //https://stackoverflow.com/questions/20994768/how-to-reduce-length-of-uuid-generated-using-randomuuid
// return fname, lname, and string
    return `${fname}${lname}${uniqueString}`;
}

// function to add account
function addAccount(user){
// if user length not 4 return false
    if(user.length != 4) return false;

    const[firstName, lastName, email, age] = user;
// if not fname, lname, email & age<18, return false
    if(!firstName || !lastName || !email || age<18) return false;
// if email is in valid format
    if(!validator.isEmail(email)) return false;
// generate unique ID
    const uniqueID = generateUniqueID(firstName,lastName);

    const userAdd = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

// append
    appendFileSync('users.txt', userAdd , 'utf-8');
    return true;
}

export{ generateUniqueID, addAccount };