import './App.css';
import DisplayCard from './components/Card/Card';
import cardData from "./data.js"
import LabTabs from './components/Tab/Tab';
function App() {
  return (
    <div className="App">
      
       <LabTabs/>
       <div className="cards">

      
       {cardData.data.map((mp, index) => (
        <DisplayCard mp={mp} index={index}/>
        
        
      ))}
      </div>
        
    </div>
  );
}

export default App;
