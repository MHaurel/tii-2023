import { Fab, colors } from "@mui/material"
import "./HelpIcon.css"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import { useState, useContext } from "react"
import * as React from 'react'
import Slide from "@mui/material/Slide"
import { AuthContext } from "../contexts/AuthContext"

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref} {...props}/>;
});

function HelpIcon(){
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);
    
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleClick() {
        setDialogOpen(!dialogOpen)
    }
    
    return (
        
        <div>

            {
                authToken === null 
                    ? 
                <></>
                    :
                <div>
                    <Dialog open={dialogOpen} TransitionComponent={Transition}>
                        <DialogContent>
                            <DialogContentText>
                                <h1 className="InfoTitle">How is weight loss calculated? 💡</h1>
                                    FitTrack helps you keeping track of the activities you realized over time and records the time you practice each activity as well as the number of calories lost. <br/>
                                    <br/> To calculate how much weight you lost by realizing different activities, we use this simple rule : a deficit of 7 700 kcals leads to loosing 1kg. 
                                    In this calculus, we also take into account the fact that everyone has a daily intake of about 1 800 to 2 400 kcal.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClick} color="secondary">Ok</Button>
                        </DialogActions>
                    </Dialog>
                    <div className="helpIcon">
                        <Fab onClick={handleClick} aria-label="help">
                            <img style={{width: 24}} src={process.env.PUBLIC_URL + "images/icons/help.png"} alt="question mark icon"/>
                        </Fab>
                    </div>
                </div>
            }
        </div>
    )

}

export default HelpIcon;