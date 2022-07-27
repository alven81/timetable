import { useEffect, useState } from "react";

const Tab = ({ tableData }) => {
    //console.log(tableData);
    const [timeTable, setTimeTable] = useState([]);
    const [sortBy, setSortBy] = useState([]);

    useEffect(() => {
        setTimeTable(tableData);
    }, [tableData]);

    function sortByField(item) {
        return (a, b) => (a[item] > b[item] ? 1 : -1);
    }

    tableData.sort(sortByField(sortBy));

    function timeConverter(time) {
        let date = Date.parse(time)/1000
        let nextDate = new Date(date * 1000);
        return nextDate.getHours() + ":" + nextDate.getMinutes()
    }

    return (
        <>
            <ul>
                <li>
                    <div>
                        <button
                            onClick={() => {
                                setSortBy("apname");
                            }}
                        >
                            DESTINATION
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setSortBy("fnr");
                            }}
                        >
                            FLIGHT
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setSortBy("sched");
                            }}
                        >
                            TIME
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setSortBy("status");
                            }}
                        >
                            REMARKS
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setSortBy("terminal");
                            }}
                        >
                            GATE
                        </button>
                    </div>
                </li>
                {
                    !timeTable ? (
                        <p>Loading</p>
                    ) : (
                        timeTable.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <p>{item.apname}</p>
                                </div>
                                <div>
                                    <p>{item.fnr}</p>
                                </div>
                                <div>
                                    <p>{timeConverter(item.sched)}</p>
                                </div>
                                <div>
                                    <p>{item.status}</p>
                                </div>
                                <div>
                                    <p>{item.terminal}</p>
                                </div>
                            </li>
                        ))
                    )

                    // <p>{tableData.arrivals[]}</p>
                }
            </ul>
        </>
    );
};

export { Tab };
