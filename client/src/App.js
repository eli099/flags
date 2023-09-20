import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      <div className="country-container">
        {countries.map(country => {
          const { ccn3, name, flags } = country
          // console.log('ccn3 ->', ccn3, 'name ->', name, 'name.nativeName type->', typeof name.nativeName, 'flags.png ->', flags.png)
          // console.log('name.nativeName type->', typeof name.nativeName)
          return (
            <div className="country" key={ccn3}>
              <div className="card-header">
                <h3>{name.common}</h3>
                <h4>({name.official})</h4>
              </div>
              <div className="card-image">
                <img src={flags.png} alt={name.common} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
