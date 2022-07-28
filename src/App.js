import "./App.scss";
import { useEffect, useState } from "react";
import { Tab } from "./Tab/Tab";

const tableData = require("./db/data.json");

function App() {
    const dep = "departures";
    const arr = "arrivals";
    const [activeTable, setActiveTable] = useState([]);
    const [activeName, setActiveName] = useState([]);

    useEffect(() => {
        setActiveTable(tableData[dep]);
        setActiveName(dep);
    }, []);

    return (
        <div className="main">
            <div className="main-table">
                <div className="main-table_buttons">
                    <button
                        onClick={() => {
                            setActiveTable(tableData[dep]);
                            setActiveName(dep);
                        }}
                    >
                        {dep}
                    </button>
                    <button
                        onClick={() => {
                            setActiveTable(tableData[arr]);
                            setActiveName(arr);
                        }}
                    >
                        {arr}
                    </button>
                </div>
                <div className="main-table_title">
                    <p>{activeName}</p>
                </div>
                <div className="main-table_info">
                    <Tab tableData={activeTable} />
                </div>
            </div>
        </div>
    );
}

export default App;
