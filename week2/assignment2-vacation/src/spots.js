import React from 'react';
import './App';




const Spot = () => {
    let keyCounter = 1;
    let vacationSpots = [
      {      
        place: "Meridian, Idaho",      
        price: 40,      
        timeToGo: "Spring"      
      },
      {      
        place: "Cancun",
        price: 900,      
        timeToGo: "Winter"      
      },
      {      
        place: "China",      
        price: 1200,      
        timeToGo: "Fall"      
      },
      {      
        place: "Russia",      
        price: 1100,      
        timeToGo: "Summer"      
      },
      {      
        place: "Lebanon",      
        price: 400,      
        timeToGo: "Spring"      
      }      
    ]

    const vacation = vacationSpots.map((item) => {
      keyCounter++
      return (
          <div key = {keyCounter}>
             {item.place}, {item.price}, {item.timeToGo}
              
          </div>
      );            
    })
return (<div>{vacation}</div>)
     
}
export default Spot