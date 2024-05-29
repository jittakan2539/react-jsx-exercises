import React, { useState } from "react";

const App = () => {
    const [temperature, setTemperature] = useState(25); // Initial temperature value

    const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
    const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

    return (
        <>
            <Header temperature={temperature} />;
            <Content temperature={temperature} />;
            <Footer temperature={temperature} />
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

onst Content = ({ temperature }) => {
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
			<button>Up</button>

			<button>Down</button>
		</footer>
	);
}

export default App;


