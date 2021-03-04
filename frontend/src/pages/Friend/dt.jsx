import React, { Suspense, useCallback, useEffect, useState } from 'react'

export default function Data(){
   //const data = []

   const [items, setItems] = useState([])

   useEffect(() => {
      const url = window.location.search
      const params = new URLSearchParams(url)
      const tags = params.get('user_avatar')

      api.get(`avatars?user_avatar=${tags}`).then(res => {  
         setItems(res.data.friends)
      })
   })

   return (
      <>
      {items}
      </>
      )  

}