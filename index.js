// /coffees ACTUAL API 
// app.post('/coffees', createcoffee)
//app.get('/coffees', get all coffees)


import express from 'express' // importing express from npm i express library (1)

import { createcoffee,getAllCoffees } from './src/coffees.js' // imported functions from src and coffee(2)


const app = express() // (3)

app.use(express.json())

app.post('/coffees',createcoffee)
app.get ('/coffees', getAllCoffees)


app.listen (3030, () => console.log('Listening on http://localhost:3030...')) (4)