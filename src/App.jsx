import Button from "./components/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<h1>Welcome to React</h1>
				<Button />
			</div>
			<Footer />
		</div>
	);
}

export default App;
