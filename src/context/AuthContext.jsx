import { Http } from "@/services/Http";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const user = useQuery({
        queryKey: ['user'],
        queryFn: () => Http.get('/v1/me', {
            headers: {
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            }
        }).then(res => res.data.data),
        retry : 0
    })


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);


export default AuthProvider;