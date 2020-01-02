import React, { useState } from "react"
import MessagePage from "../MessagePage/MessagePage"
import SendMessageForm from "../SendMessageForm/SendMessageForm"
import styles from "./messengerPage.module.css"
import SwitchButton from "../../components/SwitchButton/SwitchButton"

const MessengerPage = () => {
	// sendMessage me permet de savoir si l'utilisateur a cliquer sur envoyer un message, et donc quel composant afficher
	const [sendMessage, setSendMessage] = useState(false)
	// privacy me permet de définir s'il faut afficher/envoyer un tweet public ou privé
	const [privacy, setPrivacy] = useState("public")

	const onSendMessage = () => {
		setSendMessage(prevValue => !prevValue)
	}

	const switchPrivacy = () => {
		setPrivacy(prevPrivacy => {
			const changedPrivacy = prevPrivacy === "public" ? "private" : "public"
			return changedPrivacy
		})
	}

	return (
		<div className={styles.messengerPage}>
			<div className={styles.header}>
				<p>Tweet Messenger</p>
				<SwitchButton
					id="switchPrivacy"
					colorText="#fff"
					textOn="Public"
					textOff="Privé"
					colorOn="hsl(206, 100%, 70%)"
					callback={switchPrivacy}
					height="18px"
				/>
			</div>
			<div className={styles.content}>
				{!sendMessage && <MessagePage privacy={privacy} onSendMessage={onSendMessage} />}
				{sendMessage && <SendMessageForm privacy={privacy} onClose={onSendMessage} />}
			</div>
		</div>
	)
}

export default MessengerPage
