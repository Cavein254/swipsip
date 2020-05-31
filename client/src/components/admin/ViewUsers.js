import React, { useContext, useState, useEffect } from "react";
import { ViewUsersContext } from "../../context/AdminContext";
import { switSipFun } from "../../config/config";
import Axios from "axios";
import User from "./user";
import { Table } from "react-bootstrap";

const ViewUsers = () => {
  const { dispatch } = useContext(ViewUsersContext);
  const initialState = {
    users: [],
    payload: [],
    loading: false,
    errors: [],
  };
  const [usersData, setUsersData] = useState(initialState);

  useEffect(() => {
    const dataToSubmit = {
      user_token: switSipFun().token,
      id: switSipFun().id,
    };
    Axios.post("/api/user/admin/viewusers", dataToSubmit)
      .then((res) => res.data)
      .then((data) => {
        console.log("---------");
        if (data.success) {
          console.log(data);
          setUsersData({
            ...usersData,
            payload: data.payload,
          });
          dispatch({
            type: "VIEW_USERS",
            payload: data,
          });
        } else {
          setUsersData({
            ...usersData,
            errors: data.msg,
          });
        }
      });
  }, []);
  console.log(usersData.payload);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Last Activity</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {usersData.payload.map((user) => {
            return (
              <User
                key={user.id}
                age={user.age}
                username={user.username}
                email={user.email}
                createdAt={user.createdAt}
                updatedAt={user.updatedAt}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewUsers;
