import React, { useContext, useState, useEffect } from "react";
import { ViewUsersContext } from "../../context/AdminContext";
import { switSipFun } from "../../config/config";
import Axios from "axios";

const ViewUsers = () => {
  const { dispatch } = useContext(ViewUsersContext);
  const initialState = {
    users: [],
    loading: false,
    errors: [],
  };
  const [usersData, setUsersData] = useState(initialState);

  useEffect(() => {
    const dataToSubmit = {
      user_token: switSipFun().token,
      id: switSipFun().id,
    };
    Axios.post("http://localhost:5000/api/user/admin/viewusers", dataToSubmit)
      .then((res) => res.data)
      .then((data) => {
        if (data.success) console.log(data);
      });
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <div>
      <h1>View users</h1>
    </div>
  );
};

export default ViewUsers;
