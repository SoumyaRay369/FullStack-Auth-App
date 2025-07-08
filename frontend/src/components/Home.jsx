import { Link } from "react-router-dom"
export const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-xl flex flex-col items-center gap-y-4">
        <div className="text-2xl font-semibold text-gray-800">Welcome to the Authentication System</div>
        <div className="text-gray-600">Choose any of the following options</div>
        <div className="flex flex-row gap-x-4">
          <Link to="/login">
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-5 py-2 text-white font-medium hover:scale-105 hover:shadow-lg transition-transform">Login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-5 py-2 text-white font-medium hover:scale-105 hover:shadow-lg transition-transform">Signup</button>
          </Link>
          <Link to="/contribute">
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-5 py-2 text-white font-medium hover:scale-105 hover:shadow-lg transition-transform">Contribute</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
