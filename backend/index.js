const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

app.use(express.json())
app.use(cors())


//'cache'
const object = {
   groups: [],
   friends: [],
   avatars: []
}

//READ JSON
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

      var avatars = getData.avatars; //AVATARS
      for( let i = 0; i < avatars.length; i++ ){
         object.avatars.push(getData.avatars[i])
      }
   }
})   

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

//Get Group info
app.get('/inGroup', (req,res) => {
   const {id} = req.query

   const group = object.groups.filter(group => group.id === id)
   const friends = object.friends.filter(friends => friends.id_group === id)

   return res.json({group, friends})
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

//AVATAR
app.get('/avatars', (req,res) => {
   const {user_avatar} = req.query

   const avatars = object.avatars.filter(avatar => avatar.user_avatar === user_avatar)
   const friends = object.friends.filter(friend => friend.id === user_avatar)

   return res.json({friends ,avatars})
})

//INSERT AVATAR
app.post('/avatars', (req,res) => {
   const reqBody = req.body

   object.avatars.push(reqBody)
   
   var insert = object

   fs.writeFile('./data/data.json', JSON.stringify(insert), (err) => {
      if(err) throw err
   })

   return res.json(insert)
})

//UPDATE AVATAR
app.put('/avatars/:id_avatar', (req,res) => {
   const reqBody = req.body

   object.avatars.push(reqBody)
   
   var insert = object

   fs.writeFile('./data/data.json', JSON.stringify(insert), (err) => {
      if(err) throw err
   })

   return res.json(insert)
})

//{"id_avatar": 5, "skin":"0xFFC8A0","hair":"0x141414", "shirt":"0xF0F0F0", "pant":"0xF2F2F2", "shoes":"0x3A3A3A"}

app.listen(8080, () => {
   console.log("Server ok")
})