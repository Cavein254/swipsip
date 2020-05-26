import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { admin } = useContext(UserContext);
  useEffect(() => {
    let test = admin;
    console.log(test);
  }, []);
  let home = admin ? "home" : "love";

  return (
    <>
      <div>Admin test page</div>
      <h1>{home}</h1>
    </>
  );
};

export default Profile;
