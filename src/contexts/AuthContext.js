import { useContext, useState, createContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import 'react-toastify/dist/ReactToastify.css';
import "./AuthContext.css";
import Person from "../models/Person";
import Activity from "../models/Activity";

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

                fetchUser(access_token);

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

    async function fetchUser(access_token) {
        const bearerConfig = {
            headers: { 'Authorization': `Bearer ${access_token}` }
        };

        axios.get("https://fake-health-data-api.shrp.dev/people?filterBy=firstname&filterValue=Sadie", bearerConfig)
            .then(response => {
                let data = response.data.people[0];
                // console.log(data)
                let user_ = new Person(
                    data.id,
                    data.gender,
                    data.firstname,
                    data.lastname,
                    data.birthyear,
                    data.height,
                    data.weightStart,
                    data.weightGoal,
                    data.bmiStart,
                    data.bmiGoal,
                    data.activityProfile
                )

                axios.get(`https://fake-health-data-api.shrp.dev/people/${user_.id}/physical-activities`, bearerConfig)
                    .then(response_ => {
                        let data_ = response_.data.people.physicalActivities;
                        let physicalActivities = [];
                        data_.forEach((item) => {
                            let act = new Activity(
                                item.id,
                                user_.id,
                                item.typeOfActivity,
                                item.duration,
                                item.numberOfSteps,
                                item.consumedCalories,
                                item.date
                            )
                            physicalActivities.push(act);
                        })
                        user_.activities = physicalActivities;
                        console.log(user_)
                        setUser(user_);
                    })
                    .catch(err => {
                        console.log("Could not fetch the activities of the user")
                        // Make a toast instead
                    })
            })
            .catch(err => {
                console.log(err)
                console.log("Could not fetch the data for the user");
                // Make a toast instead
            })
    }

    const refresh = () => {
        const refreshPayload = {
            'refresh_token': refreshToken
        }
        axios.post("https://fake-health-data-api.shrp.dev/auth/refresh")
            .then(response => {
                const data = response.data;
                let access_token = data['access_token'];
                let refresh_token = data['refresh_token'];
                setAuthToken(access_token);
                setRefreshToken(refresh_token);
            })
            .catch(err => {
                console.log("An error happened")
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
        <AuthContext.Provider value={{authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser, signup, refresh}}>
            {children}
            <ToastContainer/>
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };