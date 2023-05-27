import { useEffect, useRef, useState, useContext } from "react";
import { Avatar, Card, CardContent, IconButton, Button, Typography, Paper } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import "./Profil.css";

function Profil() {
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("avatarImage");
    if (savedImage) {
      setSelectedFile(savedImage);
    }
  }, []);

  const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);

  if (authToken === null) {
    return <Navigate to="/login"/>
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedFile(imageUrl);
    localStorage.setItem("avatarImage", imageUrl);
  };

  return (
    <div className="profil-container">
        <Paper className="infos-container">
            <div>
                <h1>Profile</h1>
                <div className="infos">
                  <p> <strong> Firstname : </strong> {user.firstname} </p>
                  <p> <strong> Lastname : </strong> {user.lastname} </p>
                </div>
                <Button variant="text" color="secondary"> Edit </Button>
            </div>
        </Paper>
        <div className="avatar-container">
            <Avatar
            className="avatar"
            sx={{ width: 300, height: 300 }}
            src={selectedFile === null ? `${process.env.PUBLIC_URL}/images/avatar/10-upscaled.png` : selectedFile}
            />
            <br/>
            <div className="button">
                <IconButton color="secondary" aria-label="upload picture" component="label">
                    <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        style={{ display: "none" }}
                        onChange={handleFileSelect}
                    />
                    <PhotoCamera />
                </IconButton>
            </div>
        </div>
    </div>
  );
}

export default Profil;
