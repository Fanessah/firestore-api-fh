// /coffees
// app.post('/coffees', createcoffee)
//app.get('/coffees', get all coffees)


import express from 'express'
import { createcoffee,getAllCoffees } from './src/coffees.js'

const app = express()
app.use(express.json())

app.post('/coffees',createcoffee)
app.get ('/coffees', getAllCoffees)


app.listen (3030, () => console.log('Listening on http://localhost:3030...'))