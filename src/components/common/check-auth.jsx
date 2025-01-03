import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, children }) {
    const location = useLocation();

    // Redirect unauthenticated users to login, unless they are on an auth page
    if (!isAuthenticated && !location.pathname.startsWith("/auth")) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    // Redirect authenticated users away from auth pages
    if (
        isAuthenticated &&
        (location.pathname.includes("/login") || location.pathname.includes("/signin"))
    ) {
        return <Navigate to="/" replace />;
    }

    // Render the children if no redirects are needed
    return <>{children}</>;
}

export default CheckAuth;
