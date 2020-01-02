import PropTypes from "prop-types"
import React from "react"
import styles from "./spinner.module.css"

const Spinner = ({ color = "#000", width = "50px" }) => {
	const divStyle = {
		"--color": color,
		"--width": width,
	}
	return <div style={divStyle} className={styles.spinner}></div>
}

Spinner.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
}

export default Spinner
