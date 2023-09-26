import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import CountryList from './components /CountryList'
import Filters from './components /Filters'

const App = () => {

  // ? State
  const [countries, setCountries] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])
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

  // ? useEffect that creates regional dropdown options
  useEffect(() => {
    // Checking there are countries to loop thorugh in the first place
    // On initial page load, countries will be empty, so no need to create a list
    if (countries.length) {
      const regionalList = []
      countries.forEach(country => regionalList.includes(country.region) ? '' : regionalList.push(country.region))
      setRegions(regionalList)
    }
  }, [countries])

  // ? useEffect that filters the countries and adds them as a filteredCountries state
  useEffect(() => {
    // Only filter countries if there are countries to filter
    if (countries.length) {
      // Generate search term
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      // Filter though countries and add matching countries to filteredCountries state
      const filtered = countries.filter(country => {
        return regexSearch.test(country.name.common) && (country.region === filters.region || filters.region === 'All')
      })
      setFilteredCountries(filtered)
    }

  }, [filters, countries])

  return (
    <div className="container">
      <h1>Country Flags</h1>
      {/* Filters */}
      <Filters filters={filters} regions={regions} handleChange={handleChange}/>
      {/* Countries */}
      <CountryList countries={countries} filteredCountries={filteredCountries} />
    </div>
  )
}

export default App
