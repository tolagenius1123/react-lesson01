const Person = ({ person }) => {
	console.log(person);
	return (
		<div className="person">
			<div className="details">
				<img
					src={`${person.image}`}
					alt="person-portrait"	
				/>
				<h2>{person.name}</h2>
				<p>Net Worth: {person.netWorth}</p>
				<p>Country: {person.country}</p>
				<p>Age: {person.age}</p>
			</div>
		</div>
	);
};

export default Person;
