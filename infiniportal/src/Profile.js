import React from "react";
import NewProfile from './components/widgets/NewProfile'

export default (Profile) => {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("./");
      const json = await response.json();

      if (response.ok) {
        setProfile(json);
      }
    };
    fetchProfile();
  }, []);


  return (
    <>
      <div>
        {profile &&
          profile.map((profile) => {
            return (
              <div  key={profile._id} className="truckContainer">
                <div className="truck">
                  <a href='#'><h1 ><strong>{profile.firstName} {profile.lastName}</strong> </h1></a>
                  <p ><strong>Division:</strong> {profile.division}</p>
                  <p ><strong>Title:</strong> {profile.title}</p>
                  <p ><strong>Certification Number:</strong> {profile.certNumber || 'No Data'}</p>
                  <p> ID: {profile._id}</p>
                </div>
              </div>
            );
          })}

          <NewProfile />
      </div>
    </>
  );
};