import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		display: "inline-block",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const WeatherItem = ({ weather }) => {
	const classes = useStyles();

	console.log(weather);

	const temperature = weather.map((temp) => {
		console.log(temp);
		console.log(temp.main.temp);

		return (
			<Card className={classes.root} key={temp.dt}>
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom>
						{temp.dt_txt}
					</Typography>
					<Typography variant="h5" component="h2">
						{temp.weather[0].description}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						High: {temp.main.temp_max}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Low: {temp.main.temp_min}
					</Typography>
				</CardContent>
			</Card>
		);
	});

	return <div>{temperature}</div>;
};

{
	/* // <div key={temp.dt}>
			// 	<h2>{temp.dt}</h2>
			// 	<h3>{temp.main.temp_min}</h3>
			// 	<h4>{temp.main.temp_max}</h4>
			// </div>
			// <WeatherItem
			// 	key={temp.dt}
			// 	min={temp.main.temp_min}
			// 	max={temp.main.temp_max}
			// /> */
}

export default WeatherItem;
