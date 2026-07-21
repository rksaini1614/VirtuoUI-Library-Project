import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, authChecked }) {
    const { userData } = useSelector((state) => state.user);

    if (!authChecked) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-10 w-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }

    if (!userData) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
