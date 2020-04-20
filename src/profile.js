import React from "react";

export default function Profile(props) {
  return (
    <div className="profile">
      <h4>fullName: {props.name}</h4>
      <h4>Bio: {props.bio}</h4>
      <img className="user-image" src={props.linkUrl} alt="profile" />
      <h4>Description: {props.description}</h4>
    </div>
  );
}
