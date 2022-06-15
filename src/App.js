import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState("light");

  const styles = {
    background: mode === "light" ? "white" : "black"
  };
  return (
    <div style={styles} className="App">
      <List mode={mode} setMode={setMode} />
    </div>
  );
}
// component 2
const List = ({ setMode,mode }) => (
  <ul>
    <ListItem mode={mode} setMode={setMode} value="light" />
    <ListItem mode={mode} setMode={setMode} value="dark" />
  </ul>
);
// component 1
const ListItem = ({ value, setMode,mode }) => (
  <li>
    <Button mode={mode} setMode={setMode} value={value} />
  </li>
);
// component 0
const Button = ({ value, setMode ,mode }) => {
  const styles = {
    background: mode === "light" ? "black" : "white",
    color: mode === "dark" ? "black" : "white"
  };
  return (
    <button
      style={styles}
      onClick={() => setMode(value === "light" ? "light" : "dark")}
    >
      {value}
    </button>
  );
};

// Task (Don't delete or edit components)
// 1. Complete with props drilling - 15mins
// 2. Complete with useContext (avoiding props drilling)

// Reference - https://codesandbox.io/s/usecontext-reference-hw839?file=/src/index.js:165-178
// Expected output - https://csb-6qf0y.netlify.app/

// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
// 3. Subscriber - useContext - useContext(context)
