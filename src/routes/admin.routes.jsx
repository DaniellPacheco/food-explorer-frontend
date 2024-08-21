/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export default function AdminRoutes() {
    const { user, signOut } = useAuth();
    const isAdmin = user.is_admin = 1;
    // console.log("começa aqui", user);

    return (
        <Routes>
            <Route path="/" element={<Home isAdmin={isAdmin} user_id={user.id} />} />

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}