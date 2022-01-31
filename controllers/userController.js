'use strict'
/* 
 Author : Khaled mihoub 
 Date : 21/01/2022 10:35am
 E-mail : khaled.mihoub@esprit.tn
 profile : https://www.upwork.com/freelancers/~0111b9c88695324cca
 linkedin : https://www.linkedin.com/in/khaled-mihoub-2735051b0/
 ************************ALL RIGHTS RESERVED 2022************************
 */ 
const firebase =require('firebase');
const User = require('../models/user');
const firestore=firebase.firestore();

const addUser = async (req, res, next) => {
    try{
        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.send('Record saved successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}
module.exports = {addUser}