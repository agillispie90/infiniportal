import React from "react";

const NewTruck = (props) => {
  const [unitNumber, setUnitNumber] = React.useState("");
  const [unitMake, setUnitMake] = React.useState("");
  const [unitModel, setUnitModel] = React.useState("");
  const [unitMileage, setUnitMileage] = React.useState("");
  const [unitType, setUnitType] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const truck = { unitNumber, unitMake, unitModel,unitMileage,unitType };

    const response = await fetch("/trucks", {
      method: "POST",
      body: JSON.stringify(truck),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setUnitNumber("");
      setUnitMake("");
      setUnitModel("");
      setUnitMileage("");
      setUnitType("");
      setError(null);
      console.log("new truck added", json);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="newTruckForm" >
      <h3>Add a New Truck</h3>
      <input
        value={unitNumber}
        onChange={(e) => setUnitNumber(e.target.value)}
        name="unitNumber"
        placeholder="Unit Number"
      />
      <input
        value={unitMake}
        onChange={(e) => setUnitMake(e.target.value)}
        name="unitMake"
        placeholder="Unit Make"
      />
      <input
        value={unitModel}
        onChange={(e) => setUnitModel(e.target.value)}
        name="unitModel"
        placeholder="Unit Model"
      />
      <input
        value={unitMileage}
        onChange={(e) => setUnitMileage(e.target.value)}
        name="unitModel"
        placeholder="Mileage"
      />
      <input
        value={unitType}
        onChange={(e) => setUnitType(e.target.value)}
        name="unitModel"
        placeholder="Unit Type"
      />
      <button >Add Truck</button>

      {error && <div>{error}</div>}
    </form>
  );
};

export default NewTruck;
