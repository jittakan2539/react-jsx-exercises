import React, { useState } from "react";

const App = () => {
	const [temperature, setTemperature] = useState(25); //Initial temperature value

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
	return (
		<>
			<Header temperature={temperature} />;
			<Content temperature={temperature} />;
			<Footer
				decreaseTemperature={decreaseTemperature}
				increaseTemperature={increaseTemperature}
			/>
		</>
	);
};

const Header = ({ temperature }) => {
	return (
		<div>
			<button>ON / OFF</button>
			<span>Current Temperature: {temperature}°C</span>
		</div>
	);
};

const Content = ({ temperature }) => {
	return (
		<div>
			<Temperature temperature={temperature} />
		</div>
	);
};

const Temperature = ({ temperature }) => {
	return (
		<>
			<span>Current Temperature: {temperature}°C</span>
		</>
	);
};

function Footer() {
	return (
		<footer>
			{/* Use on click to make it take action when we click  */}
			{/* {} is to recall function from above in React */}
			<button onClick={decreaseTemperature}>Up</button>
			<button onClick={increaseTemperature}>Down</button>
		</footer>
	);
}
export default App;
