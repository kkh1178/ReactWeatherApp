import React, { useCallback } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherItem from "./WeatherItem";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

class App extends React.Component {
	state = { weather: [], city: "" };

	onSearchSubmit = async (term) => {
		// console.log(term);
		const response = await axios.get(
			"https://api.openweathermap.org/data/2.5/forecast",
			{
				params: {
					zip: `${term},us`,
					appid: "",
					units: "imperial",
					cnt: 5,
				},
			}
		);
		console.log(response);
		this.setState({
			weather: response.data.list,
			city: response.data.city.name,
		});
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: " 10 px" }}>
				<div>
					<SearchBar runWhenUserSubmits={this.onSearchSubmit} />
				</div>
				<div className="ui container" style={{ marginTop: " 10 px" }}>
					<h3>{this.state.city}</h3>
					<Grid container className={useStyles.root} spacing={3}>
						<WeatherItem weather={this.state.weather} />
					</Grid>
				</div>
			</div>
		);
	}
}

export default App;
