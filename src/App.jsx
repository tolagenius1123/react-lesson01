import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import PictureOne from "./assets/images/portrait.jpg";
import PictureTwo from "./assets/images/lady.jpg";
import PictureThree from "./assets/images/guy.jpg";
import PictureFour from "./assets/images/guy.jpg";
import PictureFive from "./assets/images/ben.jpg";
import PictureSix from "./assets/images/elon.jpg";
import PictureSeven from "./assets/images/mark.jpg";
import Person from "./components/Person";

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

	const personData = [
		{
			id: 1,
			name: "Jeff Bezos",
			image: PictureFour,
			netWorth: 100,
			country: "America",
			residence: "America",
		},
		{
			id: 2,
			name: "Ben",
			image: PictureFive,
			netWorth: 100,
			country: "America",
			residence: "America",
		},
		{
			id: 3,
			name: "Elon Musk",
			image: PictureSix,
			netWorth: 100,
			country: "America",
			residence: "America",
		},
		{
			id: 4,
			name: "Mark Zukerberg",
			image: PictureSeven,
			netWorth: 100,
			country: "America",
			residence: "America",
		},
		{
			id: 5,
			name: "Larry Elison",
			image: PictureSeven,
			netWorth: 100,
			country: "America",
			residence: "America",
		},
	];

	return (
		<div className="app">
			<Navbar />
			<div className="container">
				{personData.map((person) => {
					return (
						// <Profile name={profile.name} image={profile.image} />
						<div key={person.id}>
							<Person person={person} />
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}

export default App;

// import PictureFour from "./assets/images/guy.jpg";
// import PictureFive from "./assets/images/ben.jpg";
// import PictureSix from "./assets/images/elon.jpg";
// import PictureSeven from "./assets/images/mark.jpg";
// import Person from "./components/person";

// function App(){
// 	const personData = [
// 		{
// 			id: 1,
// 			name: "Jeff Bezos",
// 			image: PictureFour,
// 			netWorth: 100,
// 			country: "America",
// 			residence: "America",
// 		},
// 		{
// 			id: 2,
// 			name: "Ben",
// 			image: PictureFive,
// 			netWorth: 100,
// 			country: "America",
// 			residence: "America",
// 		},
// 		{
// 			id: 3,
// 			name: "Elon Musk",
// 			image: PictureSix,
// 			netWorth: 100,
// 			country: "America",
// 			residence: "America",
// 		},
// 		{
// 			id: 3,
// 			name: "Mark Zukerberg",
// 			image: PictureSeven,
// 			netWorth: 100,
// 			country: "America",
// 			residence: "America",
// 		},
// 		{
// 			id: 3,
// 			name: "Larry Elison",
// 			image: PictureSeven,
// 			netWorth: 100,
// 			country: "America",
// 			residence: "America",
// 		},
// 	];

// 	return (
// 		<div className="app">
// 			<Navbar />

// 			<div className="container">
// 				{profileData.map((person) => {
// 					return (
// 						<Person name={person.name} image={person.image} />
// 					);
// 				})}
// 			</div>

// 		</div>
// 	);
// }

// export default App;
