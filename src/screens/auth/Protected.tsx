import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"

export default ({ children }: { children: JSX.Element }) =>{
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
