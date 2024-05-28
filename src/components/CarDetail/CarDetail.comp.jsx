import { useContext, useState } from "react";
import Carousel from "../Carousel";

import Loader from "../Loader";
import Modal from "../Modal";
import { SelectedCarContext } from "../../contexts/SelectedCarContext";
import { useNavigate } from "react-router-dom";

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
  const [showModal, setShowModal] = useState(false);
  const [, setSelectedCar] = useContext(SelectedCarContext);
  const navigate = useNavigate();

  if (props.isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="px-4 sm:px-0">
        <div className="flex text-base font-semibold leading-7 text-gray-900">
          {props.car.brand.name}
          {" - "}
          {props.car.model.name}
        </div>
        <button className="btn mb-2" onClick={() => setShowModal(true)}>
          I want that car !
        </button>
        <Carousel images={props.car.images} />
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
      {showModal ? (
        <Modal>
          <div className="w-full space-y-4">
            <h1 className="text-xl">
              Would you like to buy {props.car.brand.name}?
            </h1>
            <div className="flex w-full justify-between space-x-2">
              <button
                className="btn w-full bg-orange-500"
                onClick={() => {
                  setSelectedCar(props.car);
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button
                className="btn w-full"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
export default CarDetailComponent;
