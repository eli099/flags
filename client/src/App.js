import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [ contries, setCountries ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v2/all')
        console.log('data ->', data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  })

  return (
    <div className="container">
      {/* Filters */}
      {/* Countries */}
    </div>
  )
}

export default App
