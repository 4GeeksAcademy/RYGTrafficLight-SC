import React, { useState } from "react";

export function Lights() {
	const [activeColor, setActiveColor] = useState(null);

	let boxStyles = {
		background: "black",
		height: "240px",  // Ajuste para acomodar las luces
		width: "80px",
		margin: "auto",
		borderRadius: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		padding: "10px 0"
	};

	let lightStyles = {
		height: "60px",
		width: "60px",
		margin: "auto",
		borderRadius: "100%",
		cursor: "pointer",
	};

	return (
		<div style={boxStyles}>
			<div
				className={`light red ${activeColor === 'red' ? 'active' : ''}`}
				style={lightStyles}
				onClick={() => setActiveColor('red')}></div>
			<div
				className={`light yellow ${activeColor === 'yellow' ? 'active' : ''}`}
				style={lightStyles}
				onClick={() => setActiveColor('yellow')}></div>
			<div
				className={`light green ${activeColor === 'green' ? 'active' : ''}`}
				style={lightStyles}
				onClick={() => setActiveColor('green')}></div>
		</div>
	);
}
