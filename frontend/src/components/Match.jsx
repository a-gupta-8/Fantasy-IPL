import Box from "@mui/material/Box";
import logo from "../../public/CSK_Logo.png"

export default function Matches() {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#37353E", color: "#e0e0e0" }}>
        <img
        src={logo}
        alt="Logo"
        style={{ width: "120px", height: "auto" }}
      />
    </Box>
  );
}