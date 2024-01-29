import React, { useState, useEffect } from "react";
import { get } from "../../services/api.js";
import { API_URLS } from "../../services/urls.js";
import Table from "../../components/table.js";


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
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="flex flex-col justify-center items-center w-full text-center">
                    <h1 className="text-4xl font-bold">User Info</h1>
                    <h2 className="text-xl">Welcome to your dashboard</h2>
                    <Table data={data} />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
