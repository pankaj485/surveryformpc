import React from "react";
import "./smallCanvas.css";
const smallCanvas = (props) => {
	return (
		<div className="smallCanvas">
			<h3> {props.number}</h3>
		</div>
	);
};

export default smallCanvas;
