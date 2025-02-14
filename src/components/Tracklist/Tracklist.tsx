import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

const mockTracks = [
  { id: 1, title: "Song 1", artist: "Artist 1", album: "Album 1" },
  { id: 2, title: "Song 2", artist: "Artist 2", album: "Album 2" },
];

const Tracklist: React.FC = () => {
  return (
    <div className={styles.tracklist}>
      {mockTracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default Tracklist;