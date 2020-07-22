import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { groupBy, chain } from 'lodash';
import WeatherDetails from "./WeatherDetails";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		display: "inline-block",
		alignItems: 'flex-start'
	},
	title: {
		fontSize: 14,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	pos: {
		marginBottom: 12,
	},
});


const WeatherItem = ({ weather }) => {
	const classes = useStyles();

	// console.log("This is weather: ", weather);

	// Creating a new array from the data that i really need out of the api return
	let newArr=[];
	for (let i=0; i<weather.length; i++) {
		// console.log(weather[i].dt_txt)
		const newObj = {
			"date": weather[i].dt_txt.split(" ")[0],
			"time": weather[i].dt_txt.split(" ")[1],
			"temp": weather[i].main.temp,
			"min": weather[i].main.temp_min,
			"max": weather[i].main.temp_max,
			"weather": weather[i].weather[0].main,
			"desc": weather[i].weather[0].description,
			"icon": weather[i].weather[0].icon
		}
		newArr.push(newObj)

	}
	// console.log(newArr)
	// using the groupby function out of lodash to group everything by date and then create a new array from that.
	const grouped = chain(newArr).groupBy("date").map((value, key) => ({ date: key, weather: value})).value()
	console.log("grouped", grouped)

	
	const temperature = grouped.map((temp) => {
		// creating the card and then passing down each days worth of data to weather details for further display
		return (
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title}
						color="textSecondary"
						gutterBottom>
							{temp.date}
					</Typography>
					{/* passing down the weather data to the weather details component */}
					<WeatherDetails weather={temp.weather}></WeatherDetails>
				</CardContent>
			</Card>

		)
	});

	return <div>{temperature}</div>;
};


export default WeatherItem;
