import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div>
      <h1 className="font-extrabold text-2xl">Oops!</h1>
      <p className="font-semibold text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-semibold text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
};

export default ErrorPage;
