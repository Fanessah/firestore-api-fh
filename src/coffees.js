// look at index,dbconnect,coffee.js 
import dbConnect from "./dbConnect.js" // define DB connection 


export function createcoffee(req,res) { // first time defining "create coffee"

    // connect to firestore 
const db = dbConnect()

//  add a  new doc to coffees collection // request body, all info from database 
db.collection('coffees').add(req.body)

// send back a response (err or not)
.then(doc => res.status(201).send ({success : true, message: 'Created coffee:' + doc.id}))

.catch(err => res.send(500).send ({ success: false, message:err }))
}


export function getAllCoffees(req,res) {
const db = dbConnect()
db.collection('coffees').get()
.then(collection => {
    const coffeeList = collection.docs.map(doc => doc.data())
    res.send(coffeeList)
})
.catch(err => res.status(500).send ({ success:false, message:err}))
}