import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v2/all')
        console.log('countries ->', countries)
        setCountries(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, []) // empty array so that useEffect only triggers on 1st render

  return (
    <div className="container">
      {/* Filters */}
      {/* Countries */}
    </div>
  )
}

export default App
