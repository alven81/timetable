import { useEffect, useState } from "react";

const Tab = ({ tableData }) => {
    const [timeTable, setTimeTable] = useState([]);
    const [sortBy, setSortBy] = useState([]);
    const [sortKey, setSortKey] = useState([]);

    useEffect(() => {
        setTimeTable(tableData);
    }, [tableData]);

    function sortByField(item) {
        console.log(sortKey);
        if (sortKey) {
            return (a, b) => (a[item] > b[item] ? 1 : -1);
        } else {
            return (a, b) => (a[item] > b[item] ? -1 : 1);
        }
    }

    tableData.sort(sortByField(sortBy));

    function timeConverter(time) {
        let date = Date.parse(time) / 1000;
        let nextDate = new Date(date * 1000);
        return nextDate.getHours() + ":" + nextDate.getMinutes();
    }

    return (
        <>
            <ul>
                <li>
                    <div className="main-table_info-brakedown">
                        <div className="main-table_info_time">
                            <button
                                onClick={() => {
                                    setSortKey(!sortKey);
                                    setSortBy("sched");
                                }}
                            >
                                {sortBy === "sched"
                                    ? `TIME  ${sortKey ? "▼" : "▲"}`
                                    : "TIME"}
                            </button>
                        </div>
                        <div className="main-table_info_destination">
                            <button
                                onClick={() => {
                                    setSortKey(!sortKey);
                                    setSortBy("apname");
                                }}
                            >
                                {sortBy === "apname"
                                    ? `DESTINATION  ${sortKey ? "▼" : "▲"}`
                                    : "DESTINATION"}
                            </button>
                        </div>
                    </div>
                    <div className="main-table_info-brakedown">
                        <div className="main-table_info_fnr">
                            <button
                                onClick={() => {
                                    setSortKey(!sortKey);
                                    setSortBy("fnr");
                                }}
                            >
                                {sortBy === "fnr"
                                    ? `FLIGHT  ${sortKey ? "▼" : "▲"}`
                                    : "FLIGHT"}
                            </button>
                        </div>
                        <div className="main-table_info_gate">
                            <button
                                onClick={() => {
                                    setSortKey(!sortKey);
                                    setSortBy("terminal");
                                }}
                            >
                                {sortBy === "terminal"
                                    ? `GATE  ${sortKey ? "▼" : "▲"}`
                                    : "GATE"}
                            </button>
                        </div>
                        <div className="main-table_info_status">
                            <button
                                onClick={() => {
                                    setSortKey(!sortKey);
                                    setSortBy("status");
                                }}
                            >
                                {sortBy === "status"
                                    ? `REMARKS  ${sortKey ? "▼" : "▲"}`
                                    : "REMARKS"}
                            </button>
                        </div>
                    </div>
                </li>
                {!timeTable ? (
                    <p>Loading</p>
                ) : (
                    timeTable.map((item) => (
                        <li key={item.id}>
                            <div className="main-table_info-brakedown">
                                <div className="main-table_info_time">
                                    <p>{timeConverter(item.sched)}</p>
                                </div>
                                <div className="main-table_info_destination">
                                    <p>{item.apname}</p>
                                </div>
                            </div>
                            <div className="main-table_info-brakedown">
                                <div className="main-table_info_fnr">
                                    <p>{item.fnr}</p>
                                </div>
                                <div className="main-table_info_gate">
                                    <p>{item.terminal}</p>
                                </div>
                                <div className="main-table_info_status">
                                    <p>{item.status}</p>
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
};

export { Tab };
