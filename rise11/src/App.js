import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <DashboardContent />
    </div>
  );
}

export default App;
