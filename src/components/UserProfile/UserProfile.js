import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "20px",
        position: "relative",
      }}
    >
      <img
        src={`http://localhost:5000/${user.avatar}`}
        alt="Avatar"
        style={{ width: "100px", height: "100px", marginRight: "20px" }}
      />
      <div style={{ flexDirection: "column" }}>
        <h3>{user.name}</h3>
        <p>{user.shortDescription}</p>
        <p>{user.longDescription}</p>
        <hr style={{ width: "50%", marginLeft: 0 }} />{" "}
        <p>{user.phoneNumber}</p>
        <p>{user.email}</p>
        <p>{user.address}</p>
      </div>
    </div>
  );
};

export default UserProfile;
