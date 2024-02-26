import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <p className="font-medium my-4 text-slate-500 text-center">
          {type === "login"
            ? "Don't have an account ? "
            : "Already have an account ? "}
          {type === "register" && (
            <Link to="/login" className="text-sky-400 font-bold">
              {" "}
              Login
            </Link>
          )}
          {type === "login" && (
            <Link to="/register" className="text-sky-400 font-bold">
              {" "}
              Register
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
