const Car = (props) => {
  const { brand, model, location, id, image, price, color } = props;

  return (
    <a href={`/details/${id}`}>
      <div className="flex w-full rounded-md border p-2 shadow-sm hover:bg-slate-100">
        <div>
          <img
            src={image}
            alt={model}
            className="size-12 flex-none rounded-full bg-gray-50"
          />
        </div>
        <div className="pl-5 text-base">
          <h1 className="text-xl">
            {brand} {model}
          </h1>
          <h2>{`${color} - ${location} - ${price} CZK`}</h2>
        </div>
      </div>
    </a>
  );
};

export default Car;