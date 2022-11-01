import { Button, Menu, MenuItem, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { City } from "../utils/city";
import { Type } from "../utils/type";
import React from "react";
import { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";
import { Marks } from "../utils/marks";

function valuetext(value) {
  return `Rs ${value}`;
}

function Filter(props) {
  const {
    state,
    city,
    type,
    date,
    cost,
    handleApplyFilters,
    handleChangeCity,
    handleChangeCost,
    handleChangeDate,
    handleChangeType,
    handleChangeState,
    handleRemoveFilters
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <TextField
          id="select-state"
          select
          label="Select State"
          value={state}
          onChange={handleChangeState}
          helperText="Please select your desired state"
        >
          {State.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </TextField> */}

        <TextField
          id="select-city"
          select
          label="Select City"
          value={city}
          sx={{ width:"20rem" }}
          onChange={handleChangeCity}
          helperText="Please select your desired city"
        >
          {City.map((item, index) => {
            return (
              <MenuItem key={index} value={item[0]}>
                {item[0]},{item[1]}
              </MenuItem>
            );
          })}
        </TextField>

        <TextField
          id="select-type"
          select
          label="Select Property Type"
          value={type}
          sx={{ marginLeft: "2rem" }}
          onChange={handleChangeType}
          helperText="Please select your desired property type"
        >
          {Type.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </TextField>

        <DesktopDatePicker
          label="Select Move-in Date"
          inputFormat="DD/MM/YYYY"
          value={date}
          onChange={handleChangeDate}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ marginLeft: "2rem" }}
              helperText="Please select your desired Move in Date "
            />
          )}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <Typography variant="h6">Select a price range (in Rupees)</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={cost}
            onChange={handleChangeCost}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            step={10000}
            marks={Marks}
            min={20000}
            max={200000}
            disableSwap
            sx={{ height: "0.7rem" }}
          />
        </Box>
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#153462" }}
        onClick={handleApplyFilters}
      >
        <Typography style={{ color: "white", fontWeight: "900" }}>
          Apply filters
        </Typography>
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={handleRemoveFilters}
        style={{ marginLeft: "1rem", border: "2px solid #153462" }}
      >
        <Typography style={{ color: "#153462", fontWeight: "900" }}>
          Remove All Filters
        </Typography>{" "}
      </Button>

      </div>

    </LocalizationProvider>
  );
}

export default Filter;
