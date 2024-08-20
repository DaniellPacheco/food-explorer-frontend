import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}