import React from 'react'

const CountryList = ({ countries }) => {
  return (
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
  )
}

export default CountryList