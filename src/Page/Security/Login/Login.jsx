import React, { useContext } from "react";
import bg from "../../../../public/6213932.jpg";
import { useForm } from "react-hook-form";
import { MyAuthcontext } from "../../../Provider/Authprovider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Login = () => {
  const { Login, googlesignin } = useContext(MyAuthcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const froms = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.Email;
    const password = data.Password;
    Login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(froms);
        Swal.fire("Login", "", "success");
        reset;
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(error.message, " ", "error");
      });
  };

  const handlergooglelogin = () => {
    googlesignin()
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in success Full",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate(froms, { replace: true });
      })
      .catch((error) => {
        Swal.fire(error.message, " ", "error");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="hero min-h-screen font-bold"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left text-[#ffffff]">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-white">
            <div className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered bg-transparent text-white"
                  {...register("Email", { required: true })}
                />
                {errors.Email && (
                  <span className="text-red-500 ">This Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered bg-transparent text-white"
                  {...register("Password", { required: true })}
                />
                {errors.Password && (
                  <span className="text-red-500 ">This Name is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                >
                  Login
                </button>
              </div>
              <div className="text-white">
                <h1>Have No account Sign Up please</h1>
                <a href="Sign" className="text-blue-600">
                  sign up
                </a>
              </div>
              <div className="flex space-x-4 ml-20">
                <h1>
                  <button onClick={handlergooglelogin}>
                    <FcGoogle className="text-4xl" />
                  </button>
                </h1>
                <h1>
                  <SiFacebook className="text-4xl" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
