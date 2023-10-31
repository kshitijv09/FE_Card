import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Badge } from "@mui/material";
import {Grid} from '@mui/material/';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord'
import LoopIcon from '@mui/icons-material/Loop';


const DisplayCard = ({index,mp}) => {

  const customStyle = {
    marginRight: "5px", // Adjust the value as needed
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.mode === "light" ? '#ff69b4' : theme.palette.grey[900], // Pink in light mode
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? '#006400' : '#ff69b4', // Dark green and pink colors
    },
  }));

  return (
    <div key={index}>
         <Card sx={{ maxWidth: 345, border: "2px solid grey",}} style={{ marginBottom: "100px" }}>
      <CardHeader
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      title={mp.name}
      subheader="Memberfive . Budget"
      avatar={
        <LoopIcon sx={{ fontSize: 40, color: red[500] }} aria-label="loop-icon" />
      }
    />
      <CardContent>


        
      <Grid container spacing={3} justifyContent="space-between">
      <Grid item>
        <Typography>Amount</Typography>
      </Grid>
      <Grid item>
        <Typography>Frequency</Typography>
      </Grid>
      <Grid item>
        <Typography>Expiry</Typography>
      </Grid>
    </Grid>

    <Grid container spacing={3} justifyContent="space-between" style={{ marginBottom: "25px" }}>
      <Grid item>
        <Typography style={{ fontSize: "13px" }}> <span style={customStyle}>{mp.spent.value}</span>
              {mp.spent.currency}</Typography>
      </Grid>
      <Grid item>
        <Typography style={{ fontSize: "13px" }}>Monthly</Typography>
      </Grid>
      <Grid item>
        <Typography style={{ fontSize: "13px" }}>21 July 2021</Typography>
      </Grid>
    </Grid>

   
    <BorderLinearProgress variant="determinate" value={50} style={{ marginBottom: "25px" }}/>
    

    <Grid container spacing={3} justifyContent="space-between">
      <Grid item>
     
        <Typography> <FiberManualRecord style={{ fontSize: 10, color: 'green', marginRight: '5px' }} />Spent</Typography>
      </Grid>
      <Grid item>
      <span style={customStyle}>{mp.spent.value}</span>
              {mp.spent.currency}
      </Grid>
      
    </Grid>

    <Grid container spacing={3} justifyContent="space-between">
      <Grid item>
        <Typography> <FiberManualRecord style={{ fontSize: 10, color: 'hotpink', marginRight: '5px' }} />Balance</Typography>
      </Grid>
      <Grid item>
 <span style={customStyle}>{mp.available_to_spend.value}</span>
              {mp.available_to_spend.currency}
      </Grid>
     
    </Grid>

    
        
      
      </CardContent>
      </Card>
    </div>
  );
};

export default DisplayCard;
