/* 
 Author : Khaled mihoub 
 Date : 21/01/2022 10:35am
 E-mail : khaled.mihoub@esprit.tn
 profile : https://www.upwork.com/freelancers/~0111b9c88695324cca
 linkedin : https://www.linkedin.com/in/khaled-mihoub-2735051b0/
 ************************ALL RIGHTS RESERVED 2022************************
 */ 
const firebase =require('firebase');
const   firebaseConfig= {
        apiKey:"AIzaSyA96aIP-aPFh5wngXSP5r4InorIPHeDohw",
        authDomain:"node-express-6e32f.firebaseapp.com",
        projectId: "node-express-6e32f",
        storageBucket:"node-express-6e32f.appspot.com",
        messagingSenderId: "250223299341",
        appId:"1:250223299341:web:1b8e19c32a032acebb7e44",
        measurementId:"G-3RTFR69XV2",
    }
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("User");
const UserMerchant = db.collection("MerchandUsers");
const Orders = db.collection("Orders");
const Lists = db.collection("Lists");
const Disputes = db.collection("Disputes");
module.exports = {
    User,
    UserMerchant,
    Orders,
    Lists,
    Disputes
  };