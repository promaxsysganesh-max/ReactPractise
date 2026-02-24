import React from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function App() {
  const userName = "Ganesh";

  return (
    <UserContext.Provider value={userName}>
      <h1>App Component</h1>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;