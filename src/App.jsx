import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<h1>Welcome to React</h1>
				<Button />
			</div>
		</div>
	);
}

export default App;
