const Car = (props) => {
    return (
      <div>
        <h2>{props.brand}</h2>
        <h3>{props.model}</h3>
        <h3>{props.price}</h3>
        <h3>{props.color}</h3>
      </div>
    );
  };
  
  export default Car;