import React from "react";
import "./canvas.css";
import RightArrowIcon from "../../assests/web-assist/right-arrow.png";
import LeftArrowIcon from "../../assests/web-assist/left-arrow.png";
import WhiteCursorIcon from "../../assests/web-assist/cursorWhite.png";
import BlackCursorIcon from "../../assests/web-assist/cursorBlack.png";
import SlashIcon from "../../assests/web-assist/slash.png";
import PenIcon from "../../assests/web-assist/pen-tool.png";
import PencilIcon from "../../assests/web-assist/pencil.png";
import BrushIcon from "../../assests/web-assist/paintbrush.png";
import EreaserIcon from "../../assests/web-assist/rubber.png";
import RandomIcon from "../../assests/web-assist/random.png";
import AddIcon from "../../assests/web-assist/add.png";
const mainCanvas = () => {
	return (
		<div className="mainCanvas">
			{/* <h1>mainCanvas</h1> */}
			<div className="mainCanvas__Header">
				<div className="mainCanvas__Header--Items first">
					<h3>Question-1</h3>
				</div>
				<div className="mainCanvas__Header--Items second ">
					<h3>Key</h3>
				</div>
			</div>

			<div className="canvasPageParent">
				<img className="leftArrow" src={LeftArrowIcon} alt="left arrow icon " />
				<div className="canvasPage"></div>
				<img className="rightArrow" src={RightArrowIcon} alt="right arrow icon " />
				<div className="canvasTools">
					<img src={WhiteCursorIcon} alt="white cursor icon " />
					<img src={BlackCursorIcon} alt="white cursor icon " />
					<img src={SlashIcon} alt="white cursor icon " />
					<img src={PenIcon} alt="white cursor icon " />
					<img src={PencilIcon} alt="white cursor icon " />
					<img src={BrushIcon} alt="white cursor icon " />
					<img src={RandomIcon} alt="white cursor icon " />
					<img src={EreaserIcon} alt="white cursor icon " />
				</div>
			</div>

			<div className="addIcon">
				<img src={AddIcon} alt="add icon " />
			</div>
		</div>
	);
};

export default mainCanvas;
