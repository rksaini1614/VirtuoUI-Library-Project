import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, authChecked }) {
    const { userData } = useSelector((state) => state.user);

    if (!authChecked) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
