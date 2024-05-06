import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-green-500">
          Ping
          <span className="text-3xl font-semibold text-center text-gray-300">
            {" "}
            Login
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-sky-100">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-border h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-sky-100">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Password"
              className="w-full input input-border h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <a
              href="https://i.pinimg.com/originals/df/cc/6e/dfcc6e0fcf679ef33390186e7c8a2381.jpg"
              target="_blank"
              className="text-sm hover:underline hover:text-green-500 mt-2 inline-block"
            >
              Forgot your password?
            </a>
          </div>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 btn-neutral text-sky-100 
             hover:text-white  hover:bg-green-600"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
          <div className="flex"></div>
          <div
            className="text-sm hover:underline
           hover:text-green-300 mt-2 inline-block"
          >
            <Link to="/signup">{"don't"} have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
