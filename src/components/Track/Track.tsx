import React from "react";
import styles from "./Track.module.css";

type TrackProps = {
  track: {
    id: number;
    title: string;
    artist: string;
    album: string;
  };
};

const Track: React.FC<TrackProps> = ({ track }) => {
  return (
    <div className={styles.track}>
      <p><strong>{track.title}</strong> - {track.artist} ({track.album})</p>
      <button>+</button>
    </div>
  );
};

export default Track;