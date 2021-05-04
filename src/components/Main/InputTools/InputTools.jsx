import React from "react";
import "./inputTools.css";
import ImageIcon from "../../assests/web-assist/image.png";
import LevelsIcon from "../../assests/web-assist/levels.png";
import MatrixCheckboxIcon from "../../assests/web-assist/locator.png";
import MatrixRadioIcon from "../../assests/web-assist/square-grid.png";
import TableIcon from "../../assests/web-assist/table.png";
import CanvasIcon from "../../assests/web-assist/easel.png";
import GraphIcon from "../../assests/web-assist/graph.png";

const inputTools = () => {
	return (
		<div className="inputTools">
			{/* <h1>inputTools</h1> */}

			<div className="subComponents">
				<p>Label (Question)</p>
			</div>

			<div className="subComponents">
				<input type="text" name="textbox" placeholder="Textbox" id="" />
				<label for="textbox">(Fill in the blanks)</label>
			</div>

			<div className="subComponents">
				<textarea name="" id="" cols="22" rows="2"></textarea>
			</div>

			<div className="subComponents">
				<input type="checkbox" name="mcq-checkbox" id="" />
				<label for="mcq-checkbox">Multiple Choice (Checkbox)</label>
			</div>

			<div className="subComponents">
				<input type="radio" name="mcq-radio" id="" />
				<label for="mcq-radio">Multiple Choice (radio)</label>
			</div>

			<div className="  subComponents">
				<select name="dropdown" id="">
					<option value="dropdown">Dropdown</option>
					<option value="dropdown">Dropdown</option>
					<option value="dropdown">Dropdown</option>
				</select>
			</div>

			<div className="imageIcon  subComponents">
				<img src={ImageIcon} alt="imageIcon" /> Image
			</div>

			<div className="sliderScale  subComponents">
				<img src={LevelsIcon} alt="slider scale" />
				Slider Scale
			</div>

			<div className="matrixChoice  subComponents">
				<img src={MatrixCheckboxIcon} alt="checkbox matrix " />
				Matrix Choice (Checkbox)
			</div>

			<div className="matrixChoice  subComponents">
				<img src={MatrixRadioIcon} alt="radio matrix " />
				Matrix Choice (Radio)
			</div>

			<div className="subComponents matrixDropdown">
				<div>
					<div>
						<select name="dropdown" id="">
							<option value="dropdown">Dropdown</option>
							<option value="dropdown">Dropdown</option>
							<option value="dropdown">Dropdown</option>
						</select>
					</div>

					<div>
						<select name="dropdown" id="">
							<option value="dropdown">Dropdown</option>
							<option value="dropdown">Dropdown</option>
							<option value="dropdown">Dropdown</option>
						</select>
					</div>
				</div>

				<p>Matirx Dropdown</p>
			</div>

			<div className="table  subComponents">
				<img src={TableIcon} alt="table" />
				Table
			</div>

			<div className="canvas   subComponents">
				<img src={CanvasIcon} alt="canvas" />
				Canvas
			</div>

			<div className="graph   subComponents">
				<img src={GraphIcon} alt="graph" />
				Graph
			</div>
		</div>
	);
};

export default inputTools;
