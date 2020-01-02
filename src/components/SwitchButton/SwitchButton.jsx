import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./switchButton.module.css"

const SwitchButton = ({
	id = "switchButton",
	height = "16px",
	colorOn = "hsl(240, 89%, 69%)",
	colorOff = "hsl(0, 89%, 69%)",
	colorText = "black",
	textOn = "On",
	textOff = "Off",
	callback = () => null,
}) => {
	const [checked, setChecked] = useState(true)
	const onChangeHandler = () => {
		setChecked(prevChecked => !prevChecked)
		callback()
	}
	const divStyle = {
		"--color-off": colorOff,
		"--color-on": colorOn,
		"--color": colorText,
		"--height": height,
	}
	return (
		<div style={divStyle} className={styles.parent}>
			<label htmlFor={id}>
				<span style={checked ? { color: colorOn } : { color: colorText }}>
					{textOn}
				</span>
				<span style={checked ? { color: colorText } : { color: colorOff }}>
					{textOff}
				</span>
			</label>
			<div className={styles.toggle}>
				<input
					type="checkbox"
					name={id}
					id={id}
					checked={checked}
					onChange={onChangeHandler}
				/>
				<b className={styles.round}></b>
			</div>
		</div>
	)
}

SwitchButton.propTypes = {
	id: PropTypes.string.isRequired,
	height: PropTypes.string,
	colorOn: PropTypes.string,
	colorOff: PropTypes.string,
	colorText: PropTypes.string,
	textOn: PropTypes.string,
	textOff: PropTypes.string,
	callback: PropTypes.func,
}

const propsAreEqual = (prevProps, nextProps) => {
	return prevProps.id === nextProps.id
		&& prevProps.height === nextProps.height
		&& prevProps.colorOn === nextProps.colorOn
		&& prevProps.colorOff === nextProps.colorOff
		&& prevProps.colorText === nextProps.colorText
		&& prevProps.textOn === nextProps.textOn
		&& prevProps.textOff === nextProps.textOff
}

export default React.memo(SwitchButton, propsAreEqual)