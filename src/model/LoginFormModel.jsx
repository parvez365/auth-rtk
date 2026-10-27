import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import { X } from "lucide-react";
import { useLoginMutation } from "../redux/apiConfig";
import { closeLoginModal } from "../redux/slices/loginSlice";

import ContainerPz from "../common/layers/ContainerPz";

const LoginFormModel = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((s) => s.login.isLoginModalOpen);
  const redirectTo = useSelector((s) => s.login.redirectTo);
  const [login, { data, error, isError, isLoading, isSuccess }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password }).unwrap();
      setUsername("");
      setPassword("");

      dispatch(closeLoginModal());

      if (redirectTo) navigate(redirectTo)
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      console.log("Login success:", data);
    }
  }, [data, isSuccess]);
  if (!isOpen) return null;

  return (
    <ContainerPz
      onClick={() => dispatch(closeLoginModal())}
      className="fixed top-1/2 left-1/2 -translate-1/2 w-full h-screen mx-auto bg-gray-600 dark:bg-gray-900/50"
    >
      {/* <div className="flex justify-end items-center">
        <button onClick={() => dispatch(closeLoginModal())}>
          <X className="text-2xl text-white cursor-pointer" />
        </button>
      </div> */}
      <div className="flex justify-center items-center py-30">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>

              {isError && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error?.data?.message || "Login failed. Please try again."}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </ContainerPz>
  );
};

export default LoginFormModel;
