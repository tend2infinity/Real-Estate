import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import {Image} from "../utils/images";

function Body(props) {
  const {properties} = props; 
  // console.log(Image)
  return (

    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap",justifyContent:"center", marginTop:"1rem" }}>
      {
        properties.length >0 ?
        properties.map((item, index) => {
          return (
            <Card sx={{ maxWidth: 300, margin:"1rem 2rem" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={ Image[index%7] }
                alt="property image"
              />
              <CardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:900, color:"#153462"}} component="div">
                  Rs {item.price} per month
                </Typography>
                <Typography gutterBottom variant="h5" sx={{fontWeight:900}} component="div">
                  {item.name}
                </Typography>
              <Typography gutterBottom variant="subtitle2" sx={{fontWeight:900,color:"gray"}} component="div">
                  {item.location.city},{item.location.state}
                </Typography>

                <Typography gutterBottom variant="subtitle2" sx={{fontWeight:900,color:"gray"}} component="div">
                  Property Type - {item.type}
                </Typography>

                <Typography gutterBottom variant="subtitle2" sx={{fontWeight:900,color:"gray"}} component="div">
                  Available from : {item.availability.date}/{item.availability.month}/{item.availability.year}
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
          )
        }) :
        <Typography variant='h3'sx={{ fontFamily: "ui-rounded" }}>No results found!</Typography>
      }

    </div>
  );
}

export default Body;
