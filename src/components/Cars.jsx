
const Cars = ({ cars }) => {
    console.log(cars);
  return (
    <div className = "cars">
        <div className="deets">
            <img 
            src={`${cars.image}`}
            alt="cars-image" 
            />
            <h2>{cars.name}</h2>

        </div>
    </div>
  );
};


export default Cars;