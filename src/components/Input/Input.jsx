import React from "react";
import "./input.css";

const Input = ({ message, sendMessage, setMessage }) => {
	return (
		<React.Fragment>
			<form className="form">
				<input
					className="input"
					type="text"
					placeholder="...type a message"
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					onKeyPress={(event) =>
						event.key === "Enter" ? sendMessage(event) : null
					}
				/>
				<button
					className="sendButton"
					onClick={(event) => sendMessage(event)}
				>
					Send
				</button>
			</form>
		</React.Fragment>
	);
};

export default Input;
