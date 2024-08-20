import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

import GuestRoutes from "./guest.routes";
import UserRoutes from "./user.routes";
import AdminRoutes from "./admin.routes";

export function Routes() {
    const { user, signOut } = useAuth();

    // console.log(user.is_admin);

    useEffect(() => {
        api.get("/users/validated").catch((error) => {
            if (error.response?.status === 401) {
                signOut();
            }
        });
    }, []);

    function ActualRoute() {
        if (!user) {
            return <GuestRoutes />
        }

        if (user.is_admin == 0) {
            return <UserRoutes />
        }

        return <AdminRoutes />
    }


    return (
        <BrowserRouter>
            {user ? <ActualRoute /> : <GuestRoutes />}

        </BrowserRouter>
    )
}