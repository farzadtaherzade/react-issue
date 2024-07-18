import { ReactNode, useEffect } from "react"
import { useUser } from "../../hooks/useUser"
import FullScreen from "../ui/FullScreen"
import Loader from "../ui/Loader"
import { useNavigate } from "react-router-dom";

function RequireAuth({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser()

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate('/auth/signin')
    }, [navigate, isAuthenticated, isLoading]);

    if (isLoading) return <FullScreen>
        <Loader />
    </FullScreen>

    if (isAuthenticated) return children
}

export default RequireAuth