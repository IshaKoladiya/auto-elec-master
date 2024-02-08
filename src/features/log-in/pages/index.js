import {lazy} from "react";
const Login = lazy(() => {
    return import ("../components/Login");
})


export {Login}