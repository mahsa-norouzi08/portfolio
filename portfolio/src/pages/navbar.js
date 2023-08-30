import React, { useState } from "react";
import "../index.css";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";


const data = [
  { label: "Home", link: "/" },
  { label: "About me", link: "/aboutme" },
  { label: "Skills", link: "/skills" },
  { label: "Experience", link: "/experience" },
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div
        id="burger"
        onClick={() => setSidebar(!sidebar)}
        className={sidebar ? "open" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {sidebar ? (
        <Box sx={{ display: "flex" }} className="sidebar">
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiListItemButton: {
                  defaultProps: {
                    disableTouchRipple: true,
                  },
                },
              },
              palette: {
                mode: "dark",
                primary: { main: "rgb(102, 157, 246)" },
                background: { paper: "rgb(5, 30, 52)" },
              },
            })}
          >
            <Paper elevation={0} sx={{ maxWidth: 256 }}>
              <Box
                sx={{
                  bgcolor: "rgba(71, 98, 130, 0.2)",
                }}
              >
                {data.map((item) => (
                  <ListItemButton
                    href={item.link}
                    key={item.label}
                    sx={{
                      py: 0,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    />
                  </ListItemButton>
                ))}
              </Box>
            </Paper>
          </ThemeProvider>
        </Box>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
