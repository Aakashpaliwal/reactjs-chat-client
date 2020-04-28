import React from "react";
import "./messages.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
const Messages = ({ messages, name }) => {
	return (
		<React.Fragment>
			<ScrollToBottom className="messages">
				{messages.map((message, i) => (
					<div key={i}>
						<Message message={message} name={name} />
					</div>
				))}
			</ScrollToBottom>
		</React.Fragment>
	);
};

export default Messages;
