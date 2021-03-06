import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [users, setUsers] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const ENDPOINT = "https://react-node-js-chat-application.herokuapp.com/";
	useEffect(() => {
		const { name, room } = queryString.parse(location.search);
		socket = io(ENDPOINT);
		setName(name);
		setRoom(room);
		socket.emit("join", { name, room }, () => {});

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages([...messages, message]);
		});

		socket.on("roomData", ({ users }) => {
			setUsers(users);
		});
	}, [messages]);

	//send messages func

	const sendMessage = (event) => {
		event.preventDefault();
		if (messages) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	// console.log(message, messages);

	return (
		<React.Fragment>
			<div className="outerContainer">
				<div className="container">
					<InfoBar room={room} />
					<Input
						message={message}
						setMessage={setMessage}
						sendMessage={sendMessage}
					/>
					<Messages messages={messages} name={name} />
				</div>
				<TextContainer users={users} />
			</div>
		</React.Fragment>
	);
};

export default Chat;
