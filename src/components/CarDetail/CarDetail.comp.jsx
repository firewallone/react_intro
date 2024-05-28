const DetailParam = (props) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {props.value}
      </dd>
    </div>
  );
};

const CarDetailComponent = (props) => {
  if (props.isLoading) {
    return (
      <div className="animate-pulse">
        🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗
      </div>
    );
  }
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {props.car.brand.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {props.car.model.name}
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <DetailParam label="Year" value={props.car.year} />
          <DetailParam label="Price" value={props.car.price + " " + "CZK"} />
          <DetailParam label="Color" value={props.car.color} />
          <DetailParam label="Location" value={props.car.location} />
          <DetailParam label="Description" value={props.car.description} />
        </dl>
      </div>
    </div>
  );
};
export default CarDetailComponent;
