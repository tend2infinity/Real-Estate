import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import { Link, Menu, MenuItem } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      style={{ background: "#EEEEEE", boxShadow: "0px 0px white", display:'flex',flexWrap:'wrap' }}
    >
      <Toolbar>
        <Link href="#">
          <IconButton>
            <HouseRoundedIcon fontSize="large" style={{ color: "#153462" }} />
          </IconButton>
        </Link>

        <Link href="#">
          <Typography
            variant="h5"
            style={{ fontWeight: "600", color: "#153462", marginTop: "0.4rem" }}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Real Estate
          </Typography>
        </Link>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "5rem" }}
        >
          <Button color="inherit" style={{ marginLeft: "1rem" }}>
            <Typography style={{ color: "#153462", fontWeight: "900" }}>
              Rent
            </Typography>{" "}
          </Button>
          <Button color="inherit" style={{ marginLeft: "1rem" }}>
            <Typography style={{ color: "#153462", fontWeight: "900" }}>
              Buy
            </Typography>
          </Button>
          <Button color="inherit" style={{ marginLeft: "1rem" }}>
            <Typography style={{ color: "#153462", fontWeight: "900" }}>
              Sell
            </Typography>
          </Button>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "45rem" }}
        >
          <Button variant="outlined" size="large" style={{ marginLeft: "10rem",border:"2px solid #153462" }}>
            <Typography style={{ color: "#153462", fontWeight: "900" }}>
              Login
            </Typography>{" "}
          </Button>
          <Button variant="contained" size="large" style={{ marginLeft: "1rem", backgroundColor:"#153462" }}>
            <Typography style={{ color: "white", fontWeight: "900" }}>
              Signup
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
