import Avatar from "@mui/material/Avatar";

function AvatarButton({ onClick, src }) {
  return (
    <Avatar
      src={src}
      sx={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

export default AvatarButton;