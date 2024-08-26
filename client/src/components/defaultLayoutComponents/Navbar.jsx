import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-yellow-400 mb-4">
        <Toolbar>
          <h1
            className="flex-grow text-xl text-black font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Artı 365 Case Study
          </h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
