import { useContext, useState, createContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import 'react-toastify/dist/ReactToastify.css';
import "./AuthContext.css";

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [user, setUser] = useState(null);
    const [sidebarDisabled, setSidebarDisabled] = useState(true);
    // const [activeSidebarButton, setActiveSidebarButton] = useState("home");

    const navigate = useNavigate();

    const login = (email, password) => {
        axios.post("https://fake-health-data-api.shrp.dev/auth/signin", {}, {
            auth: {
              username: email, // Replace by `email`
              password: password // Replace by `password`
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
                toast("username / password is wrong", {
                    className: 'toast-error'
                });
            })
    }

    const signup = (firstname, lastname, email, password) => {
        const signUpPayload = {
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'password': password
        }

        axios.post("https://fake-health-data-api.shrp.dev/auth/signup", signUpPayload)
            .then(response => {
                toast("Account has been created, you can log in", {
                    className: 'toast-sucess'
                })
                navigate("/login");
            })
            .catch(err => {
                let status = err.response.status;
                if (status === 409) {
                    toast("An account with these information already exists", {
                        className: 'toast-error'
                    });
                } else {
                    toast("An error happened", {
                        className: 'toast-error'
                    });
                }
            })
    }

    const clearTokens = () => {
        setAuthToken(null);
        setRefreshToken(null);
        setSidebarDisabled(true);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser, signup}}>
            {children}
            <ToastContainer/>
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };