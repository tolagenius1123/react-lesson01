import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import PictureOne from "./assets/images/portrait.jpg";
import PictureTwo from "./assets/images/lady.jpg";
import PictureThree from "./assets/images/guy.jpg";
import PictureFour from "./assets/images/elon.jpg";
import PictureFive from "./assets/images/jeff.jpg";
import PictureSix from "./assets/images/ben.jpg";
import PictureSeven from "./assets/images/mark.jpg";
import CarOne from "./assets/images/car1.jpg";
import CarTwo from "./assets/images/car2.jpg";
import CarThree from "./assets/images/car3.jpg";
import CarFour from "./assets/images/car4.jpg";
import CarFive from "./assets/images/car5.jpg";
import Cars from "./components/Cars";

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

	const carData = [
		{
			id: 1,
			image: CarOne,
			name: "Audi",

		},
		 {
			id: 2,
			image: CarTwo,
			name: "Toyota",

		},
		 {
			id: 3,
			image: CarThree,
			name: "BMW",

		 },
	      {
			id: 4,
			image: CarFour,
			name: "Jaguar",

		 },
		 {
			id: 5,
			image: CarFive,
			name: "Sports",

		},

	 ];
	  return (
	   <div className="app">
			<Navbar />
		
			<div className="container">
				{carData.map((car) => {
				return(
				<div key= {car.id }>
						<Cars cars={car} />

					</div>
				);
				})}

			</div>
		<Footer />
		</div>
	 );
};


export default App;



	/*const personData = [
		{
			id: 1,
			name: "Elon Musk",
			image: PictureFour,
			netWorth : 218 + " Billion",
			country: "USA",
			age: 53,
		},
		{
			id: 2,
			name: "Jeff Bezoz",
			image: PictureFive,
			netWorth: 215 + " Billion",
			country: "USA",
			age: 60,
		},
		{
			id: 3,
			name: "Bernard Arnault",
			image: PictureSix,
			netWorth: 199 + " Billion",
			country: "France",
			age: 75,
		},
		{
			id: 4,
			name: "Mark Zukerberg",
			image: PictureSeven,
			netWorth: 179 + " Billion",
			country: "USA",
			age: 40,
		},
		{
			id: 5,
			name: "Larry Elison",
			image: PictureSeven,
			netWorth: 161 + " Billion",
			country: "USA",
			age: 51,
		},
	];*/

	/*return (
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
	);*/


	
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

 //export default App;
