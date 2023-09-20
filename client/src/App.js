import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import CountryList from './components /CountryList'

const App = () => {

  // ? State
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [filters, setFilters] = useState({
    region: 'All',
    searchTerm: '',
  })

  // ? Get API Data
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

  // ? handleChange updates filter state
  const handleChange = (e) => {
    console.log(e.target.value)
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  // ? useEffect that cerates regional dropdown options
  useEffect(() => {
    // Checking there are countries to loop thorugh in the first place
    // On initial page load, countries will be empty, so no need to create a list
    if (countries.length) {
      const regionalList = []
      countries.forEach(country => regionalList.includes(country.region) ? '' : regionalList.push(country.region))
      setRegions(regionalList)
    }
  }, [countries])

  return (
    <div className="container">
      <h1>Country Flags</h1>
      {/* Filters */}
      <div className="filter-container">
        {/* Regional Dropdown */}
        <select name="region" value={filters.region} onChange={handleChange}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          {/* Loop through regionList */}
          {regions.map(region => <option value={region} key={region}>{region}</option>)}
        </select>
        {/* Search Field */}
        <input type="text" name="searchTerm" value={filters.searchTerm} onChange={handleChange}/>
      </div>
      {/* Countries */}
      <CountryList countries={countries} />
    </div>
  )
}

export default App
