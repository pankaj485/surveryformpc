import React from "react";
import MenuIcon from "../assests/web-assist/menu.png";
import EyeIcon from "../assests/web-assist/eye.png";
import "./header.css";

const header = () => {
	return (
		<div>
			<header className="mainHeader">
				<div className="userProfile"></div>
				<div className="burgerMenu">
					<img src={MenuIcon} alt="menu icon " />
				</div>
				<div className="eyeIcon">
					<img src={EyeIcon} alt="eye icon " />
				</div>
			</header>
		</div>
	);
};

export default header;
