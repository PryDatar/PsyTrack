import React from "react";
import contact from "./contact.png";
import mail from "./mai.png";
import address from "./adress.png";

const UserProfile = ({ user }) => {
  const styles = {
    userProfileContainer: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "20px",
      marginLeft: "50px",
      position: "relative",
    },
    userProfileAvatarContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "40px"
    },
    userProfileAvatar: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    userProfileDetails: {
      display: "flex",
      flexDirection: "column",
    },
    userProfileName: {
      fontSize: "2em",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    userProfileDescription: {
      marginBottom: "15px",
      fontSize: "1.2em",
    },
    userProfileHr: {
      width: "50%",
      marginLeft: "0",
      marginTop: "15px",
      border: "none",
      borderTop: "1px solid #ddd",
    },
    userProfileContactInfo: {
      display: "flex",
      alignItems: "center",
      marginTop: "10px",
    },
    userProfileContactInfoP: {
      margin: "0",
      marginRight: "10px",
    },
    userProfileContactInfoIcon: {
      width: "20px",
      height: "20px",
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.userProfileContainer}>
      <div style={styles.userProfileDetails}>
        <h3 style={styles.userProfileName}>{user.name}</h3>
        <p style={styles.userProfileDescription}>
          {user.shortDescription == "undefined" ? user.shortDescription : ""}
        </p>
        <p style={styles.userProfileDescription}>
          {user.longDescription == "undefined" ? user.longDescription : ""}
        </p>
        <hr style={styles.userProfileHr} />
        <div style={styles.userProfileContactInfo}>
          <img
            src={contact}
            alt="Contact Info Icon"
            style={styles.userProfileContactInfoIcon}
          />
          <p style={styles.userProfileContactInfoP}>{user.phoneNumber}</p>
        </div>
        <div style={styles.userProfileContactInfo}>
          <img
            src={mail}
            alt="Contact Info Icon"
            style={styles.userProfileContactInfoIcon}
          />
          <p style={styles.userProfileContactInfoP}>{user.email}</p>
        </div>
        <div style={styles.userProfileContactInfo}>
          <img
            src={address}
            alt="Contact Info Icon"
            style={styles.userProfileContactInfoIcon}
          />
          <p style={styles.userProfileContactInfoP}>{user.address}</p>
        </div>
      </div>
      <div style={styles.userProfileAvatarContainer}>
        <img
          src={`http://localhost:5000/${user.avatar}`}
          alt="Avatar"
          style={styles.userProfileAvatar}
        />
      </div>
    </div>
  );
};

export default UserProfile;
