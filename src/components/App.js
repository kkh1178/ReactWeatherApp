import React, { useCallback } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherItem from "./WeatherItem";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WeatherDetails from "./WeatherDetails"

const useStyles = makeStyles((theme) => ({
	bold: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold'
	},
}));

class App extends React.Component {
	state = { weather: [], city: "" };
	// use axios to call the api at openweather
	onSearchSubmit = async (term) => {
		// console.log(term);
		const response = await axios.get(
			"https://api.openweathermap.org/data/2.5/forecast",
			{
				params: {
					zip: `${term},us`,
					// Dont forget to add api key
					appid: "ba460d34ad555f000fb28bd098dbdf0d",
					units: "imperial",
					// cnt: 10,
				},
			}
		);
		// console.log(response)

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

				<Grid container direction="row" justify="center" alignItems="flex-start" style={{ marginTop: "10px", marginBottom: "10px" }}>
					<h3 style={{justify: 'center'}} >{this.state.city}
					</h3>
				</Grid>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="flex-start">
					<WeatherItem weather={this.state.weather} />
				</Grid>
			</div>
		);
	}
}

export default App;
