import { Navigate } from "react-router"

export const ProtectedRouteForUser = ({children}) => {
    const user = JSON.parse(localStorage.getItem('LoggedInuser'))
    if (user && Array.isArray(user) && user.length > 0) {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}