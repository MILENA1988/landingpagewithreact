import React from "react";
import PropTypes from "prop-types";

export function Car(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.Titulo}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
Car.propTypes = {
	imageUrl: PropTypes.string,
	Titulo: PropTypes.string
};
