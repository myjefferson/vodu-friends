const express = require('express')
const app = express()
const cors = require('cors')
const {uuid} = require('uuidv4')
const fs = require('fs')

app.use(express.json())
app.use(cors())

fs.readFile('./data/data.json', (err, data) => {
   object.groups = [] //clean groups
   object.friends = [] //clean friends
   object.avatars = [] //clean avatars

   if(data.length == 0 || data.length == null){
      fs.writeFile('./data/data.json', JSON.stringify(object), (err) => {
         return res.json(object)
      })
   }else{
      const getData = JSON.parse(data)

      var groups = getData.groups; //GROUPS

      for( let i = 0; i < groups.length; i++ ){
         object.groups.push(getData.groups[i])
      }

      var friends = getData.friends; //FRIENDS
      for( let i = 0; i < friends.length; i++ ){
         object.friends.push(getData.friends[i])
      }
   }
})   

//'cache'
const object = {
   groups: [],
   friends: [],
   avatars: []
}

//GETALL
app.get('/gets', (req, res) => {        
   return res.json(object)  
})

//GROUPS
app.post('/groups', (req, res) => {
   const reqBody = req.body
   
   object.groups.push(reqBody)

   var insert = object;

   fs.writeFile('./data/data.json', JSON.stringify(insert), (err) => {
      if(err) throw err
   })

   return res.json(insert)
})

//USERS
app.get('/friends/:id', (req, res) => {
   const reqBody = req.body
   
   object.friends.push(reqBody)

   var insert = object;

   fs.writeFile('./data/data.json', JSON.stringify(insert), (err) => {
      if(err) throw err
   })

   return res.json(insert)
})

app.post('/friends', (req, res) => {
   const reqBody = req.body
   
   object.friends.push(reqBody)

   var insert = object;

   fs.writeFile('./data/data.json', JSON.stringify(insert), (err) => {
      if(err) throw err
   })

   return res.json(insert)
})

app.listen(8080, () => {
   console.log("Server ok")
})