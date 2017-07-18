import React from 'react';

export default (
  title, googleAddress, displayAddress, phoneNumber, hours, website) => {
  return (
    <div className="storeContainer">
      <p className="storeTitle">{ title }</p>
      <p className="link">
        <a
          href={`http://maps.google.com/?q=${googleAddress}`}
        >
          { displayAddress }
        </a>
      </p>
      <p className="link">
        <a
          href={`tel:${phoneNumber}`}
          className="link"
        >
          { phoneNumber }
        </a>
      </p>
      <p className="hours">{ hours }</p>
      <p className="link">
        <a
          href={`https://${website}`}
          className="link"
        >
          Store link
        </a>
      </p>
    </div>
  )
}
