import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Opps something went wrong!
          </h3>
          <Link
            to={"/"}
            className="mt-2 text-sm text-red-700 hover:text-blue-700"
          >
            Click here to return home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
