import React from "react";
import UserList from "./features/UserList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">Redux CRUD</h1>
      <UserList />
    </div>
  );
}

export default App;
