import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute({ children }) {
    const { userData } = useSelector((state) => state.user);

    if (!userData) {
        return <Navigate to="/" replace />;
    }

    if (userData.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default AdminRoute;