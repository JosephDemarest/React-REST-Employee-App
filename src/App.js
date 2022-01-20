import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Employees from "./components/Employees";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="container my-3">
      <div className="d-flex flex-column align-items-center">
        <Employees />
      </div>
    </div>
  );
}
