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
        let date = Date.parse(time)/1000;
        let nextDate = new Date(date * 1000);
        return nextDate.getHours() + ":" + nextDate.getMinutes()
    }

    // function setMaxLengthDest(data) {
    //     if (data.split("").length < 19) {
    //     let tempText = data.split("").concat(Array(20-data.split("").length))
    //        return tempText.join("");
    //     };
    // }

    return (
        <>
            <ul>
                <li>
                <div className='main-table_info_time'>
                        <button
                            onClick={() => {
                                setSortBy("sched");
                            }}
                        >
                            TIME
                        </button>
                    </div>
                    <div className='main-table_info_destination'>
                        <button
                            onClick={() => {
                                setSortBy("apname");
                            }}
                        >
                            DESTINATION
                        </button>
                    </div>
                    <div className='main-table_info_fnr'>
                        <button
                            onClick={() => {
                                setSortBy("fnr");
                            }}
                        >
                            FLIGHT
                        </button>
                    </div>
                    <div className='main-table_info_gate'>
                        <button
                            onClick={() => {
                                setSortBy("terminal");
                            }}
                        >
                            GATE
                        </button>
                    </div>
                    <div className='main-table_info_status'>
                        <button
                            onClick={() => {
                                setSortBy("status");
                            }}
                        >
                            REMARKS
                        </button>
                    </div>

                </li>
                {
                    !timeTable ? (
                        <p>Loading</p>
                    ) : (
                        timeTable.map((item) => (
                            <li key={item.id}>
                                                                <div className='main-table_info_time'>
                                    <p>{timeConverter(item.sched)}</p>
                                </div>
                                <div className='main-table_info_destination'>
                                    <p>{item.apname}</p>
                                </div>
                                <div className='main-table_info_fnr'>
                                    <p>{item.fnr}</p>
                                </div>
                                <div className='main-table_info_gate'>
                                    <p>{item.terminal}</p>
                                </div>
                                <div className='main-table_info_status'>
                                    <p>{item.status}</p>
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
