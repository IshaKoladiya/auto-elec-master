import { lazy } from "react";

const SignUp = lazy(()=>{
    return import("../components/SignUp")
})


export {SignUp}