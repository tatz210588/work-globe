import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {  IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#474747",
                }
            }
        }
    }
});

const ApplicationNavbar = () => {
    
  const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="h1" sx={{ flexGrow: 1, textAlign: "left" }}>
                    <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIcon sx={{ color: "white" }} />
            </IconButton>
                    Apply for Position at TCS for  Full Stack Developer
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default ApplicationNavbar;