import React from 'react';
import PersonPicture from "../assets/images/portrait.jpg";


const Person = (prop) => {
  return (
    <div className="person">
      <div className="details">
         <img src={`${prop.image}`} alt="person-portrait" width="100" height="100" />
          <h2>{prop.name}</h2>
           <p>Net Worth:{prop.netWorth}</p>
            <p>Country:{prop.country}</p>
            <p>Residence:{prop.residence}</p>
      </div>
    </div>
  )
}

export default Person;