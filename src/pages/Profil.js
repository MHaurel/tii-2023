import { useEffect, useRef, useState, useContext } from "react";
import { Avatar, Card, CardContent, IconButton, Button } from "@mui/material";
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

  const {authToken, setAuthToken, login} = useContext(AuthContext);

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
        <Card className="infos-container">
            <CardContent>
                <h1>Profil</h1>
                <div className="infos">
                  <p> <strong> Nom : </strong> Doe </p>
                  <p> <strong> Prénom : </strong> John </p>
                  <p> <strong> Âge : </strong> 30 ans </p>
                </div>
                <Button variant="text"> Modifier </Button>
            </CardContent>
        </Card>
        <div className="avatar-container">
            <Avatar
            className="avatar"
            sx={{ width: 300, height: 300 }}
            src={selectedFile}
            />
            <br/>
            <div className="button">
                <IconButton color="primary" aria-label="upload picture" component="label">
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
