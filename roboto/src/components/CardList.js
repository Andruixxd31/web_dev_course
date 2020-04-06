import React from 'react'; 
import Card from './Card';


const CardList = ({robots}) => {
  return (
    <div>
      {
      robots.map((user, i) => { 
        //Map goes trough the list of robot.js to get all the needed atributes and creates a card for each element
        return (
          <Card 
            key = {i} //The key is used to let the react DOM know which card is which and when a card is remove.
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
          />
        ); 
        })
      }
    </div>
  );
}

export default CardList;