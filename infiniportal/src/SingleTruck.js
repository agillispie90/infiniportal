import React from "react";
import { useParams } from "react-router-dom";
import NewTruck from './components/widgets/NewTruck'

export default function Trucks(props) {
  const [trucks, setTrucks] = React.useState(null);
  React.useEffect(() => {
    const fetchTrucks = async () => {
      const response = await fetch(`/:id`);
      const json = await response.json();

      if (response.ok) {
        setTrucks(json);
      }
    };
    fetchTrucks();
  }, []);

  const [showForm, setShowForm] = React.useState(Boolean(false))
  function handleShowForm(){
    setShowForm(prevShow => !prevShow)
  }
    

  return (
    <>
    {showForm && <NewTruck />}
    <button onClick={handleShowForm}>New Truck</button>
      <div>
        {trucks &&
          trucks.map((truck) => {
            return (
              <div  key={truck._id} className="truckContainer">
                <div className="truck">
                  <a href='#'><h1 ><strong>{truck.unitNumber}</strong> </h1></a>
                  <p ><strong>Make:</strong> {truck.unitMake}</p>
                  <p ><strong>Model:</strong> {truck.unitModel}</p>
                  <p ><strong>Mileage:</strong> {truck.unitMileage || 'No Data'}</p>
                  <p ><strong>Type:</strong> {truck.unitType || 'Not Set'}</p>
                </div>
              </div>
            );
          })}

          
      </div>
    </>
  );
};