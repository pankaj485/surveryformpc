import React from "react";
import RightArrowIcon from "../../assests/web-assist/right-arrow.png";
import LeftArrowIcon from "../../assests/web-assist/left-arrow.png";
import SmallCanvas from "./SmallCanvas/Smallcanvas";
import "./secondaryCanvas.css";
const secondaryCanvas = () => {
	return (
		<div className="secondaryCanvas">
			<img className="leftArrow" src={LeftArrowIcon} alt="left arrow icon " />
			<SmallCanvas number="1" />
			<SmallCanvas number="2" />
			<SmallCanvas number="3" />
			<SmallCanvas number="4" />
			<SmallCanvas number="5" />
			<img className="rightArrow" src={RightArrowIcon} alt="right arrow icon " />
		</div>
	);
};

export default secondaryCanvas;
