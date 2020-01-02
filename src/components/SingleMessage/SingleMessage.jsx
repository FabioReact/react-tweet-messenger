import PropTypes from "prop-types"
import React from "react"
import styles from "./singleMessage.module.css"

const SingleMessage = ({
	pseudo = "Pseudo",
	children = "No children assigned...",
}) => {
	return (
		<div className={styles.message}>
			<span>{pseudo}</span>
			<p>{children}</p>
		</div>
	)
}

SingleMessage.propTypes = {
	pseudo: PropTypes.string,
	children: PropTypes.string,
}

export default SingleMessage
