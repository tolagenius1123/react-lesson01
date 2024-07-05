const Person = ({ person }) => {
	console.log(person);
	return (
		<div className="person">
			<div className="details">
				<img
					src={`${person.image}`}
					alt="person-portrait"
					width="100"
					height="100"
				/>
				<h2>{person.name}</h2>
				<p>Net Worth:{person.netWorth}</p>
				<p>Country:{person.country}</p>
				<p>Residence:{person.residence}</p>
			</div>
		</div>
	);
};

export default Person;
