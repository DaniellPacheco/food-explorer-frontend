/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import Home from "../pages/Home";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Dish } from "../pages/Dish";
import { NotFound } from "../pages/NotFound";

export default function AdminRoutes() {
    const { user } = useAuth();
    const isAdmin = user.is_admin;
    // console.log("começa aqui", isAdmin);

    return (
        <Routes>
            <Route path="/" element={<Home isAdmin={isAdmin} user_id={user.id} />} />
            <Route path="/new" element={<New isAdmin={isAdmin} />} />
            <Route path="/dishes/:id" element={<Dish isAdmin={isAdmin} />} />
            <Route path="/edit/:id" element={<Edit isAdmin={isAdmin} />} />

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}