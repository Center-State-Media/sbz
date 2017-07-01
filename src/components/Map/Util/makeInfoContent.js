import React from 'react';

export default (
  title, googleAddress, displayAddress, phoneNumber, hours, website) => {
  return (
    <div className="storeContainer">
      <p className="test">{ title }</p>
      <a href={`http://maps.google.com/?q=${googleAddress}`}>
        { displayAddress }
      </a>
      <a href={`tel:${phoneNumber}`}>
        { phoneNumber }
      </a>
      <p>{ hours }</p>
      <a href={`https://${website}`}>
        Store link
      </a>
    </div>
  )
}
