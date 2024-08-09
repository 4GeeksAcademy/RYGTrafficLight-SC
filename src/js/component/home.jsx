import React from "react";
import { Sticks } from "./stick.jsx";
import { Lights } from "./lights.jsx";

// Crear el componente principal Home
const Home = () => {
	return (
		<div>
			<Sticks />
			<Lights />
		</div>
	);
}

export default Home;

