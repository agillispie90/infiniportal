import React from "react";

const NewProfile = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [division,setDivision] = React.useState("");
  const [title,setTitle] = React.useState("");
  const [certNumber,setCertNumber] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profile = {firstName,lastName,division,title,certNumber};

    const response = await fetch("/profile", {
      method: "POST",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setFirstName("");
      setLastName("");
      setDivision("");
      setTitle("");
      setCertNumber("");
      setError(null);
      console.log("new profile added", json);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Profile</h3>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        name="firstName"
        placeholder="First Name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        name="lastName"
        placeholder="Last Name"
      />
      <input
        value={division}
        onChange={(e) => setDivision(e.target.value)}
        name="division"
        placeholder="Division"
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        placeholder="Job Title"
      />
      <input
        value={certNumber}
        onChange={(e) => setCertNumber(e.target.value)}
        name="certNumber"
        placeholder="Certification Number"
      />
      <button>Add Profile</button>

      {error && <div>{error}</div>}
    </form>
  );
};

export default NewProfile;
