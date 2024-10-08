import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function GuestRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />

            <Route path="*" exact={true} element={<SignIn />} />
        </Routes>
    )
}