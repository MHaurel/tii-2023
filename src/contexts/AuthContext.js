import { useContext, useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [sidebarDisabled, setSidebarDisabled] = useState(true);

    const navigate = useNavigate();

    const login = (email, password) => {
        axios.post("https://fake-health-data-api.shrp.dev/auth/signin", {}, {
            auth: {
              username: "john@doe.com", // Replace by `email`
              password: "azerty" // Replace by `password`
            }
        })
            .then(response => {
                const data = response.data;
                let access_token = data['access_token'];
                let refresh_token = data['refresh_token'];
                setAuthToken(access_token);
                setRefreshToken(refresh_token);

                setSidebarDisabled(false);
                navigate("/");
            })
            .catch(err => console.error(err))
    }

    const clearTokens = () => {
        setAuthToken(null);
        setRefreshToken(null);
        setSidebarDisabled(true);
    }

    return (
        <AuthContext.Provider value={{authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled}}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };