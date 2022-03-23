import { createContext, useContext } from "react"

interface AuthContextType {
  user: any // TODO
}
// Context in react = props die je in de hele app wenst te gebruiken
export const AuthContext = createContext<AuthContextType>(null!)

// Make context available without jsx/ tsx
export const useAuth = ()=> useContext(AuthContext)