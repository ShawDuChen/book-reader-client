import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
      <h1 className="text-2xl text-bold">Page Not Found!</h1>
      <Link to={"/"} className="text-blue-500 hover:underline">
        Back To Home Page!
      </Link>
    </div>
  );
}
