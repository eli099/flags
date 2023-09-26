import React from 'react'

const Filters = ({ filters, regions, handleChange }) => {
  return (
    <div className="filter-container">
      {/* Regional Dropdown */}
      <select name="region" value={filters.region} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        {/* Loop through regionList */}
        {regions.map(region => <option value={region} key={region}>{region}</option>)}
      </select>
      {/* Search Field */}
      <input type="text" name="searchTerm" value={filters.searchTerm} onChange={handleChange} />
    </div>
  )
}

export default Filters