import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

const Playlist: React.FC = () => {
  return (
    <div className={styles.playlist}>
      <h2>My Playlist</h2>
      <input type="text" placeholder="Enter playlist name" />
      <Tracklist />
      <button className={styles.saveButton}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;