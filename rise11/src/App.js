import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <DashboardContent />
      {/* <Clain /> */}
    </div>
  );
}

export default App;
