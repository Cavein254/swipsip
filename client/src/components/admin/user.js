import React from "react";

const User = ({ username, email, createdAt, updatedAt, age, key }) => {
  return (
    <>
      <tr>
        <td></td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          {Date(createdAt).toLocaleString("en-US", {
            timeZone: "Africa/Nairobi",
          })}
        </td>
        <td>
          {Date(updatedAt).toLocaleString("en-US", {
            timeZone: "Africa/Nairobi",
          })}
        </td>
        <td>{age}</td>
      </tr>
    </>
  );
};

export default User;
