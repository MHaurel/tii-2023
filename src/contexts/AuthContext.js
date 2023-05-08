import { useContext, useState, createContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [user, setUser] = useState(null);
    const [sidebarDisabled, setSidebarDisabled] = useState(true);

    const navigate = useNavigate();

    const showLogError = () => {
        toast("username / password is wrong")
    }

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
            .catch(err => {
                console.error(err);
                showLogError();
            })
    }

    const clearTokens = () => {
        setAuthToken(null);
        setRefreshToken(null);
        setSidebarDisabled(true);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser}}>
            {children}
            <ToastContainer/>
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };