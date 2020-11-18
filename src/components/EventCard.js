import React from "react";

class ImageCard extends React.Component {
	render() {
		console.log(`window.location.href=${this.props.confUrl}`);
		return (
			<div className="card">
				<div className="image">
					<img src={this.props.imageUrl.replace(/['"]+/g, "")} alt="" />
				</div>
				<div className="content">
					<div className="header">{this.props.confName}</div>
					<div className="description">{this.props.confStartDate}</div>
					<div className="description">{this.props.city}</div>
				</div>
				<div className="content">
					<div className="description">Venue: {this.props.venue}</div>
				</div>
				<div className="content">
					<div className="description">Entry: {this.props.entryType}</div>
				</div>
				<div className="extra content">
					<a className="ui button" href={this.props.confUrl}>
						Visit website
					</a>
				</div>
			</div>
		);
	}
}

export default ImageCard;
