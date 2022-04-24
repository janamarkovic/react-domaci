import React from 'react';
import OneCar from './OneCar';

const Cars = ({cars, onAdd, onRemove }) => {
const name = "New Car Name";
const description ="New Car description that we got from Car component using props.";
  return (<div className="all-cars">
  {cars.map((car) => (
        <OneCar
        key ={car.id}
        car={car} 
        onAdd={onAdd}
        onRemove={onRemove}
/>
      ))}

</div>
);
};

export default Cars;
