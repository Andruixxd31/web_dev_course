import React from 'react'; 
import Card from './Card';


const CardList = ({robot}) => {
  return (
    <div>
      {
      robot.map((user, i) => { 
        //Map goes trough the list of robot.js to get all the needed atributes and creates a card for each element
        return (
          <Card 
            key = {i} //The key is used to let the react DOM know which card is which and when a card is remove.
            id={robot[i].id} 
            name={robot[i].name} 
            email={robot[i].email}
          />
        ); 
        })
      }
    </div>
  );
}

export default CardList;