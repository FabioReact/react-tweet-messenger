import React from "react"
import CenteredComponent from "../../components/CenteredComponent/CenteredComponent"
import { domain } from "../../config"
import { formatResponse } from "../../utils"
import { ReactComponent as Icon } from "./send.svg"
import SingleMessage from "../../components/SingleMessage/SingleMessage"
import Spinner from "../../components/Spinner/Spinner"
import styles from "./messagePage.module.css"
import useFetch from "../../hooks/useFetch"

const AllMessages = ({ data }) => (
	data.map(tweet => (
		<SingleMessage key={tweet.id} pseudo={tweet.pseudo}>
			{tweet.content}
		</SingleMessage>
	))
)

const MessagePage = ({ onSendMessage, privacy }) => {	
	// j'utilise mon custom hook pour fetch l'url dont l'utilisateur souhaite récupérer les tweets
	const url = privacy === "public" ? `${domain}/publicTweets` : `${domain}/privateTweets`
	let [data, loading, error] = useFetch({method: "get", url: url})
	if(data) data = formatResponse(privacy, data)
	return (
		<>
			{loading && <CenteredComponent><Spinner color="hsl(208, 12%, 25%)"/></CenteredComponent>}
			{data && <AllMessages data={data} loading={loading} />}
			{error && <CenteredComponent><p>Oops, la requête n'a pas aboutie :(</p></CenteredComponent>}
			<button className={styles.send} onClick={onSendMessage}><Icon /></button>
		</>
	)
}

export default MessagePage
