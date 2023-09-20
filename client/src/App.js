import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import CountryList from './components /CountryList'

const App = () => {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all')
        console.log('countries ->', countries)
        // console.log('working?')
        setCountries(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, []) // empty array so that useEffect only triggers on 1st render

  return (
    <div className="container">
      <h1>Country Flags</h1>
      {/* Filters */}
      
      {/* Countries */}
      <CountryList countries={countries} />
    </div>
  )
}

export default App
