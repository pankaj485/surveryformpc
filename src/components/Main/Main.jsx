import React from "react";
import "./main.css";
import InputTools from "./InputTools/InputTools";
import MainCanvas from "./Canvas/Canvas";
import SecondaryCanvas from "./SecondaryCanvas/SecondayCanvas";

const mainBody = () => {
	return (
		<div className="mainArea">
			<InputTools />
			<MainCanvas />
			<SecondaryCanvas />
		</div>
	);
};

export default mainBody;
