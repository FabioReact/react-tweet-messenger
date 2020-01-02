// Me permet de formater la structure des données pour un affichage cohérent au niveau du componsant SimpleMessage
export const formatResponse = (privacyMode, data) => {
	let tweets
	if (privacyMode === "private") {
		tweets = data.map(tweet => {
			const sendedBy = tweet.sentByMe
				? `Envoyé à ${tweet.pseudo} ✔️`
				: `Reçu de ${tweet.pseudo} 📩`
			return {
				...tweet,
				pseudo: sendedBy,
			}
		})
	} else {
		tweets = [...data]
	}
	return tweets
}
