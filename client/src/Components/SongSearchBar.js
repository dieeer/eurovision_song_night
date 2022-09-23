import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import SongCard from "./SongList";
import "./App.css";

function songSearch() {
  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <SongCard />
    </div>
  );
}

export default songSearch;