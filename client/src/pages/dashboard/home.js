import React, { useState, useEffect } from "react";
import { get } from "../../services/api.js";
import { API_URLS } from "../../services/urls.js";
function Dashboard() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await get(API_URLS.dashboard);
            setData(response);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-6xl font-bold text-gray-800">{data.example}</h1>
        </>
    );
}

export default Dashboard;
