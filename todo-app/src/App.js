import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { db } from "./firebase_config";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function App() {
  const [todo, setToDo] = useState(" ");

  const submitTrigger = (e) => {
    e.preventDefault(); // this is because form input type submit, or button type submit will trigger the page to refresh

    db.collection("ToDos").add({
      isinprogress: true,
      todo: todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="Title">
      <header>James To Do App</header>
      <TextField
        label="Todo"
        variant="standard"
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <Button variant="outlined" onClick={submitTrigger} type="submit">
        Submit
      </Button>
    </div>
  );
}

export default App;
