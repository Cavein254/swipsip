import React from "react";
import store from "../../store";

const Profile = (props) => {
  const state = store.getState();
  console.log(state.User);
  return <div>Your profile page</div>;
};

export default Profile;
