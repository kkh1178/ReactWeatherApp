import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./Image"
import ColoredLine from "./ColoredLine"

const useStyles = makeStyles({

	pos: {
        marginBottom: 12,
        textAlign: 'center'
    }
});

const WeatherDetails = ({weather}) => {
    // console.log(weather);
    const classes = useStyles();
    const details = weather.map((w, i) => {
        return(
        <Typography variant="h5" className={classes.pos} component="h2" key={i}>
            
            <Typography className={classes.pos} color="textSecondary">
                Time: {w.time}
            </Typography> 
            <Image icon={w.icon} alt={w.desc}></Image>
            <Typography className={classes.pos} color="textSecondary">
                Temperature: {w.temp}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Weather: {w.desc}  
            </Typography>
            <ColoredLine color="#DCDCDC"/>
        </Typography>
        
        )
    })

    return <div>{details}</div>;
}


export default WeatherDetails;
