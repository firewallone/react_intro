import Car from "./Car";

const CarList = (props) => {
    return (
        <div>
          <h1>Velocity Vault</h1>
          <Car brand="Ford" model="Mustang" price="1000 EUR" color="Red" />
          <Car brand="Ford" model="Fiesta" price="3000 EUR" color="Blue" />
          <Car brand="Ford" model="Focus" price="2000 EUR" color="Black" />
        </div>
      );
  };
  
  export default CarList;