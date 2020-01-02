import PropTypes from "prop-types"
import React from "react"
import styles from "./input.module.css"

const Input = ({
	type = "text",
	id = "inputId",
	placeholder = "No placeholder",
	value = "",
	onChange,
	baseSize = "16px",
	required = false,
	colorOn = "hsl(210, 100%, 62%)",
	colorOff = "hsl(0, 0%, 50%)",
}) => {
	return (
		<span
			className={styles.span}
			style={{
				fontSize: baseSize,
				"--colorOn": colorOn,
				"--colorOff": colorOff,
			}}
		>
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={onChange}
				required={required}
				autoComplete="off"
			/>
			<label
				htmlFor={id}
				className={value.length > 0 ? styles.filled : null}
			>
				{placeholder}
			</label>
		</span>
	)
}

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	baseSize: PropTypes.string,
	required: PropTypes.bool,
	colorOn: PropTypes.string,
	colorOff: PropTypes.string,
}

export default Input
