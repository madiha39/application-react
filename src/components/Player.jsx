import React from "react";

const Player = ({ player }) => (
  <div className="card" style={{ width: "18rem", margin: "1rem" }}>
    <div className="card-body">
      <h5 className="card-title">{player.name}</h5>
      <p className="card-text">
        <strong>Team:</strong> {player.team}
      </p>
      <p className="card-text">
        <strong>Nationality:</strong> {player.nationality}
      </p>
      <p className="card-text">
        <strong>Jersey Number:</strong> {player.jerseynumber}
      </p>
      <p className="card-text">
        <strong>Age:</strong> {player.age}
      </p>
    </div>
  </div>
);

export default Player;
