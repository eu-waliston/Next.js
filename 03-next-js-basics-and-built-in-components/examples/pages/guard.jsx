import React from "react";
import { useRouter } from "next/router";
import PrivateComponent from "./private";

const user = {
    "username" : "Dumbledor"
}

// function getuser(){
//     const data = user
//     console.log(data);
//     return data
// }


const RouteGuard = () => {
    const router = useRouter()
    // const {data} = getuser()

    React.useEffect(() => {
        if(!user) {
            router.push("/login")
        } else {
            router.push("/private")

        }
    }, [user])

    return user ? <PrivateComponent /> : null

    console.log(user);
}


export default RouteGuard;