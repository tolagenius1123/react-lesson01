import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import PictureOne from "./assets/images/portrait.jpg";
import PictureTwo from "./assets/images/lady.jpg";
import PictureThree from "./assets/images/guy.jpg";

function App() {
	const profileData = [
		{
			id: 1,
			name: "Cynthia",
			image: PictureOne,
		},
		{
			id: 2,
			name: "Beyonce",
			image: PictureTwo,
		},
		{
			id: 3,
			name: "Damilare",
			image: PictureThree,
		},
		{
			id: 3,
			name: "Damilare",
			image: PictureThree,
		},
		{
			id: 3,
			name: "Damilare",
			image: PictureThree,
		},
	];

	return (
		<div className="app">
			<Navbar />
			<div className="container">
				{profileData.map((profile) => {
					return (
						<Profile name={profile.name} image={profile.image} />
					);
				})}
			</div>
		</div>
	);
}

export default App;
