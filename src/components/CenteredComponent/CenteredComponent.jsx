import React from 'react'

const CenteredComponent = ({children}) => {
	const divStyles = {
		left: "50%",
		top: "50%",
		position: "absolute",
		transform: "translate(-50%, -50%)",
	}
	return (
		<div style={divStyles}>
			{children}
		</div>
	)
}

export default CenteredComponent
