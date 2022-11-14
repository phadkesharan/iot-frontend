import React from 'react'
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


export default function FinalPage({ menu1, menu2, location, n }) {

  useEffect(() => {

    const netMenu = []

    menu1.forEach(i => {
      netMenu.push(i)
    })

    menu2.forEach(i => {
      netMenu.push(i)
    })

    axios({
      url: 'http://localhost:8000/order',
      method: 'POST',
      headers: { 
        "access-control-allow-origin" : "*",
      },
      data: {
        location: location,
        n: n,
        seat: 'seat',
        dishes: netMenu
      }
    })
    .then((response)=>{
      console.log(response)
      setLoading(false)
    })
  }, [])

  const [loading, setLoading] = useState(false);

  return (
    <div>
      {
        loading ? <CircularProgress /> : <h2>Your order has been Received</h2>
      }
    </div>
  )
}
