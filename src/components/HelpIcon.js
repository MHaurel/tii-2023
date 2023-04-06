import { Fab } from "@mui/material"
import "./HelpIcon.css"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import { useState } from "react"
import * as React from 'react'
import Slide from "@mui/material/Slide"

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref} {...props}/>;
});

function HelpIcon(){
    
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleClick() {
        setDialogOpen(!dialogOpen)
    }
    
    return (
        <div>
            <Dialog open={dialogOpen} TransitionComponent={Transition}>
                <DialogTitle>Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>Lorem Ipsum Lorem Ipsum Lorem Ipsum</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>Ok</Button>
                </DialogActions>
            </Dialog>

            <Fab onClick={handleClick} aria-label="help" className="helpIcon">
                <img style={{width: 24}} src={process.env.PUBLIC_URL + "images/icons/help.png"} alt="question mark icon"/>
            </Fab>

        </div>
    )

}

export default HelpIcon;