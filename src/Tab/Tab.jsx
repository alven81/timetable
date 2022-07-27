const Tab = ({tableData}) => {
    console.log(tableData);
    return(
        <>
            <ul>
            <li>
                    <button>DESTINATION</button>
                    <button>FLIGHT</button>
                    <button>TIME</button>
                    <button>REMARKS</button>
                    <button>GATE</button>
                </li>
                    {
                    !tableData ? <p>Loading</p> : 
                        
                        tableData.map((item) => 
    
                            <li key={item.id}>
                                <p>{item.apname}</p>
                                {/* <p>{item.duration}</p> */}
                                <p>{item.fnr}</p>
                                <p>{item.sched}</p>
                                <p>{item.status}</p>
                                <p>{item.terminal}</p>
                            </li>
                        )
                        
                            // <p>{tableData.arrivals[]}</p>
                    }
            </ul>
        </>
        
        
            

        
        
    )
}

export {Tab}