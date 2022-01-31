/* 
 Author : Khaled mihoub 
 Date : 21/01/2022 10:35am
 E-mail : khaled.mihoub@esprit.tn
 profile : https://www.upwork.com/freelancers/~0111b9c88695324cca
 linkedin : https://www.linkedin.com/in/khaled-mihoub-2735051b0/
 ************************ALL RIGHTS RESERVED 2022************************
 */ 
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {User,UserMerchant, Orders, Lists, Disputes} =require('./config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// admin consult users
app.get("/admin/getUsers",async(req, res)=>{
  try{
    const snapshot = await User.get();
    const list =snapshot .docs.map((doc)=> ({ id: doc.id, ...doc.data()} ) )
    res.send (list);
  }catch(error){
    res.status(400).send(error.message);
  } 
})

// admin consult vendor users
app.get("/admin/getMerchantUsers",async(req, res)=>{
  try{
  const snapshot = await UserMerchant.get();
  const list =snapshot .docs.map((doc)=> ({ id: doc.id, ...doc.data()} ) )
  res.send (list);
}catch(error){
  res.status(400).send(error.message);
} 
})

// admin add users
app.post("/admin/createUser",async(req, res)=>{
  try{
    const data = req.body;
    console.log("dataa = ",data);
    await User.add(data)
    res.send({msg:'user added'});
  }catch(error){
    res.status(400).send(error.message);
  } 
})

// admin ban users_id in request 
app.post("/admin/banUser",async(req, res)=>{
  try{
    const id = req.body.id;
    const data =  {"banned": "true"};
    await User.doc(id).update(data);
    res.send({msg:'user banned'});
  }catch(error){
    res.status(400).send(error.message);
  } 
})




// admin Remove Lists_id in request 
app.post("/admin/RemoveList",async(req, res)=>{
  try{
    if (req.body.id){
      const id = req.body.id;
      await Lists.doc(id).delete();
      res.send({msg:'List removed'});
    }else {
      res.send({msg:'Invalid data'});
    }
  }catch(error){
  res.status(400).send(error.message);
  } 
})


// admin consult Lists
app.get("/admin/getLists",async(req, res)=>{
  try{
    const snapshot = await Lists.get();
    const list =snapshot.docs.map(
      (doc)=> (
        { id: doc.id, ...doc.data()} ))
    res.send (list);
  }catch(error){
    res.status(400).send(error.message);
  } 
})

// admin consult dispute 
app.get("/admin/getDispute",async(req, res)=>{
  try{
      const id = req.body.id;
      const snapshot = await Disputes.doc(id).get();
    if (snapshot.data() != null) {
      res.send (snapshot.data());
    }
    else res.status(400).send(error.message);
    //const snapshot2 = await UserMerchant.doc(snapshot.data().idmerchand).get() 
  }catch(error){
      res.status(400).send(error.message);
    } 
})

//admin submit resolve dispute_id and message in request  
app.post("/admin/ResolveDispute",async(req, res)=>{
  try{
    const id = req.body.id;
    const data={"solving" : req.body.data};
    const snapshot = await Disputes.doc(id).update(data);
    res.send({msg:'resolved dispute'});
  }catch(error){
    res.status(400).send(error.message);
  } 
})



// admin consult Orders
app.get("/admin/getOrders",async(req, res)=>{
  try{
    const snapshot = await Orders.get();
    const list =snapshot .docs.map((doc)=> ({ id: doc.id, ...doc.data()} ) )
    res.send (list);
  }catch(error){
    res.status(400).send(error.message);
  } 
})


app.listen(3000, ()=> {
  console.log("... Server stated at port 3000");
});


