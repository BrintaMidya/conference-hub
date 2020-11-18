import React from "react";
import EventCard from "./EventCard";

const DisplayEvents = (props) => {
	const eventsList = props.eventsList.map((event) => (
		<EventCard
			key={event.conference_id}
			imageUrl={event.imageURL}
			confName={event.confName}
			confStartDate={event.confStartDate}
			entryType={event.entryType}
			city={event.city}
			venue={event.venue}
			confUrl={event.confUrl}
		/>
	));
	return <div className="ui two stackable cards">{eventsList}</div>;
};

export default DisplayEvents;
