import './App.css';
import React, { useState } from "react";
import DisplayCard from './components/Card/Card';
import cardData from "./data.js"
import LabTabs from './components/Tab/Tab';

function App() {
  const [filter, setFilter] = useState("All");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <LabTabs />
      <div style={{ marginBottom: "60px", marginRight: "0px" }}>
        <select value={filter} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="subscription">Subscription</option>
          <option value="burner">Burner</option>
        </select>
      </div>
      <div className="cards">
        {cardData.data.map((mp, index) => {
          if (filter === "All" || mp.card_type === filter) {
            return <DisplayCard key={index} mp={mp} index={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
