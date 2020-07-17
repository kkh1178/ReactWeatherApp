import React from "react";
import { AppBar } from "@material-ui/core";
import { InputBase } from "@material-ui/core";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = (event) => {
		// console.log(event);
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state.term);
		this.props.runWhenUserSubmits(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<label>Search:</label>
					<input
						type="text"
						value={this.state.term}
						onChange={this.onInputChange}
						placeholder="Enter Zipcode..."
						id="filled-basic"></input>
				</form>
			</div>
		);
	}
}

export default SearchBar;
