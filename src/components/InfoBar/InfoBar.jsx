import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import "./infobar.css";

const InfoBar = ({ room }) => {
	return (
		<React.Fragment>
			<div className="infoBar">
				<div className="leftInnerContainer">
					<img className="onlineIcon" src={onlineIcon} alt="online" />
					<h3>{room}</h3>
				</div>
				<div className="righteftInnerContainer">
					<a href="/">
						<img src={closeIcon} alt="close" />
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default InfoBar;
