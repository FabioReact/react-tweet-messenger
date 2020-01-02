import axios from "axios"
import { useState, useEffect } from "react"

// Ici je définis mon Custom Hook permettant de faire des fetchs avec axios
// Il renvoie un tableau contenant 3 valeurs: [data, loading, error]
// data étant les données reçues, loading l'état de la requête, et error en cas d'erreur lors du fetch
export default function useFetch(config) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const source = axios.CancelToken.source()
		;(async () => {
			setLoading(true)
			setData(null)
			setError(null)
			try {
				const response = await axios({
					...config,
					cancelToken: source.token,
				})
				setData(response.data)
				// setError(null)
				setLoading(false)
			} catch (error) {
				if (axios.isCancel(error)) return null
				// setData(null)
				setError(error)
				setLoading(false)
			}
		})()
		return () => source.cancel()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [JSON.stringify(config)])

	return [data, loading, error]
}
