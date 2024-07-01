import React from "react";
import Dashboard from "./dashboard"

export async function getStaticprops(){
    const userRq = await fetch("./api/user.json")
    const userData = await userRq.json();

    const dashboardRq = await fetch("./dashboard.jsx")
    const dashboardData = await dashboardRq.json();

    return {
        props: {
            user: userData,
            data: dashboardData
        },
        revalidate: 600 //time in second (10 minutes)
    }
}
function IndexPage(props) {
    return (
        <div>
            <Dashboard 
                user={props.user}
                data={props.data}
            />
        </div>
    )
}

export default IndexPage;