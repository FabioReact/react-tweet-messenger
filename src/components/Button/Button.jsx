import PropTypes from "prop-types"
import React from "react"
import styles from "./button.module.css"

const Button = ({ type, children = "Button", color = "black", onClick, style = {} }) => {
	const buttonStyle = {
		...style,
		"--color": color,
	}
	return (
		<button
			type={type}
			style={buttonStyle}
			className={styles.button}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.object
}

export default Button
