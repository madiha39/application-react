import React from "react";
import players from "../players";
import Player from "./Player";

const PlayerList = () => (
  <div className="player-list">
    {players.map((player, idx) => (
      <Player key={player.name + idx} player={player} />
    ))}
  </div>
);

export default PlayerList;
