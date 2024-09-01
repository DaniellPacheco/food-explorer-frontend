import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export function Routes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}