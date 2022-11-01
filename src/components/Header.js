import styled from "@emotion/styled";
import { alpha, InputBase, Typography } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  
  return (
    <div style={{ margin: "2rem 4rem" }}>
      <Typography variant="h3" sx={{ fontFamily: "ui-rounded" }}>
        {" "}
        Search properties to rent{" "}
      </Typography>
      
    </div>
  );
}

export default Header;
