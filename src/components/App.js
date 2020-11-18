import React from "react";
import DisplayEvents from "./DisplayEvents";
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = { searchFilter: "", events: [] };

	componentDidMount() {
		const apiUrl =
			"https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";

		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ events: data.free.concat(data.paid) });
				console.log(this.state.events);
			});
	}
	onSearchEvents = (term) => {
		this.setState({ searchFilter: term });
	};

	filterEvents() {
		return this.state.events.filter((event) => {
			return (
				(event.confName + event.city)
					.toLowerCase()
					.indexOf(this.state.searchFilter) !== -1
			);
		});
	}

	render() {
		let events = this.filterEvents();
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<div>
					<h1>Conference Hub</h1>
				</div>
				<SearchBar onSearch={this.onSearchEvents} />
				<DisplayEvents eventsList={events} />
			</div>
		);
	}
}

export default App;
