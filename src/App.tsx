import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="container">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
};

export default App;