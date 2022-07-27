import './App.scss';
import { useEffect, useState } from 'react';
import { Tab } from './Tab/Tab';


const tableData = require("./db/data.json");

function App() {
    
    const [activeTable, setActiveTable] = useState([]);

    useEffect(() => {
        setActiveTable(tableData.departures)
        console.log(tableData.departures);
    }, []);

    
  return (

    <div className="App">
        <div className='main-table'>
            <div className='main-table_buttons'>
                <button onClick={() => setActiveTable(tableData.departures)}>Depature</button>
                <button onClick={() => setActiveTable(tableData.arrivals)}>Arrival</button>
            </div>
            <div className='main-table_info'>
                {tableData&& <Tab tableData = {activeTable} />}
            </div>
        </div>
        
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
