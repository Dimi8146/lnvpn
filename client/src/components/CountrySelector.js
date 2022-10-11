import React from 'react'
import {Form} from 'react-bootstrap'
const CountrySelector = (props) => {
  return (
    <div>
        <Form.Select aria-label="Choose continent" size="lg" onChange={props.onChange}>
          <option value="1">🇸🇬 Singapore</option>
          <option value="2">🇺🇸 United States</option>
          <option value="3">🇫🇮 Finnland</option>
          <option value="4">🇬🇧 United Kingdom</option>
          <option value="5">🇨🇦 Canada</option>
          <option value="6">🇮🇳 India</option>
          <option value="7">🇳🇱 Netherlands</option>
          <option value="8">🇷🇺 Russia</option>
          <option value="9">🇺🇦 Ukraine</option>
          <option value="10">🇨🇭 Switzerland</option>
          <option value="11">🇮🇱 Israel</option>
          <option value="12">🇰🇿 Kazakhstan</option>
          {/* <option value="13">🇹🇷 Turkey</option> */}
          {/* <option value="14">🇧🇷 Brazil</option> */}
        </Form.Select>      
     </div>
  )
}

export default CountrySelector
