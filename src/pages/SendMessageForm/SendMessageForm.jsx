import axios from "axios"
import React, { useState } from "react"
import Button from "../../components/Button/Button"
import CenteredComponent from "../../components/CenteredComponent/CenteredComponent"
import { domain } from "../../config"
import Input from "../../components/Input/Input"
import styles from "./sendMessageForm.module.css"
import Spinner from "../../components/Spinner/Spinner"

const SendMessageForm = ({ privacy, onClose }) => {
	const [destinataire, setdestinataire] = useState("")
	const [textarea, setTextarea] = useState("")
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const onChangeInput = e => {
		setdestinataire(e.target.value)
	}

	const onChangeTextarea = e => {
		setTextarea(e.target.value)
	}

	const onSubmit = async e => {
		e.preventDefault()
		const url = privacy === "public" ? `${domain}/publicTweets` : `${domain}/privateTweets`
		let data
		if (privacy === "public") {
			data = {
				pseudo: "Fabio",
				content: textarea
			}
		} else {
			data = {
				pseudo: destinataire,
				content: textarea,
				sentByMe: true
			}
		}
		try {
			setLoading(true)
			await axios({
				method: "post",
				url,
				data
			})
			onClose()
		} catch(error) {
			setLoading(false)
			setError(error)
		}
	}

	if (error) return (
		<CenteredComponent>
			<p style={{marginBottom: "16px"}}>Oops, la requête n'a pas aboutie :(</p>
			<Button style={{width: "100%"}}type="reset" color="rgb(102, 189, 255)" onClick={() => setError(false)}>
				Revenir
			</Button>
		</CenteredComponent>
	)
	if (loading) return <CenteredComponent><Spinner color="hsl(208, 12%, 25%)" /></CenteredComponent>

	return (
		<form className={styles.sendForm} onSubmit={onSubmit}>
			{privacy === "private" ? (
				<Input
					baseSize="10px"
					id="sendTo"
					placeholder="Envoyer à"
					value={destinataire}
					onChange={onChangeInput}
					colorOff="hsl(208, 12%, 25%)"
					colorOn="hsl(208, 12%, 25%)"
					required
				/>
			) : null}
			<label htmlFor="tweetContent">Tweet à envoyer:</label>
			<textarea
				value={textarea}
				onChange={onChangeTextarea}
				name="tweetContent"
				id="tweetContent"
				autoFocus
				autoComplete="off"
				required
			></textarea>
			<div className={styles.flex}>
				<Button type="submit" color="rgb(102, 189, 255)">
					Envoyer
				</Button>
				<Button type="reset" color="#e70000" onClick={onClose}>
					Fermer
				</Button>
			</div>
		</form>
	)
}

export default React.memo(SendMessageForm)
