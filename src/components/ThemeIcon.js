function ThemeIcon({theme}) {

    let imgFileName = theme.palette.mode === "dark" ? "light_mode.png" : "dark_mode.png";
    let imgPath = process.env.PUBLIC_URL + "/images/icons/" + imgFileName;
    
    return (
        <img style={{width: 24}} src={imgPath} alt={imgPath}/>
    )
}

export default ThemeIcon;