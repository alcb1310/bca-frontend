import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Typography } from "@mui/material";

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link
                    to="/"
                    className="text-sm [&.active]:font-bold [&.active]:text-blue-500 [&.active]:underline"
                >
                    <Typography
                        variant="body2"
                        component="h5"
                    >
                        Home
                    </Typography>
                </Link>{" "}
                <Link
                    to="/about"
                    className="[&.active]:font-bold [&.active]:text-blue-500 [&.active]:underline"
                >
                    <Typography variant="body1" component="h5" className="text-sm">
                        About
                    </Typography>
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
