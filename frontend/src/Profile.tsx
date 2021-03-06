//import React from 'react'
import { Avatar } from "@material-ui/core";
import "./Profile.css";
import StackHeatMap from "./StackHeatmap";

function Profile() {
  return (
    <div className="profile">
      {/* <img className="avatar" src="meditation.jpg" alt="gravatar"/> */}
      <Avatar src="meditation.jpg" alt="avatar" />
      <h1>a meditator</h1>
      <h2>Silver Meditator</h2>
      <StackHeatMap />
    </div>
  );
}

export default Profile;
