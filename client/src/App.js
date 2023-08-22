import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all')
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
      <div className="country-container">
        {countries.map((country, index) => {
          const { ccn3, name, flags } = country
          console.log('ccn3 ->', ccn3, 'name ->', name, 'name.nativeName ->', name.nativeName, 'flags.png ->', flags.png)
          return (
            <div className="country" key={index}>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
