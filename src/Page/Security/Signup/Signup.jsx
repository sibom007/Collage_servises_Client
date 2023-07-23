import React, { useContext } from "react";

import bg from "../../../../public/6213932.jpg";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyAuthcontext } from "../../../Provider/Authprovider";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Signup = () => {
  const { createuser, Updateprofil, googlesignin, fackbook } =
    useContext(MyAuthcontext);
  const VITE_IMG_PHOTO = import.meta.env.VITE_IMG_PHOTO;
  const navigate = useNavigate();
  const location = useLocation();
  const froms = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const VITE_IMG_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${VITE_IMG_PHOTO}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.Photo[0]);

    fetch(VITE_IMG_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgrespond) => {
        const Photo = imgrespond.data.display_url;

        console.log(Photo);
        createuser(data.email, data.password)
          .then((result) => {
            Updateprofil(data.name, Photo);
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(froms);
          })
          .catch((error) => {
            Swal.fire(error.message, " ", "error");
          });
      });
  };
  const handlergooglelogin = () => {
    googlesignin().then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign in success Full",
        showConfirmButton: false,
        timer: 1500,
      });
      Navigate(froms);
    });
  };

  const handlerfackbook = () => {
    fackbook().then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left text-[#ffffff]">
            <h1 className="text-5xl font-bold">Sing Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl border bg-[#ffffff] bg-opacity-40">
            <div className="card-body text-white">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-transparent text-white w-[520px]"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 ">This Name is required</span>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered bg-transparent text-white w-[520px]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 ">This Name is required</span>
                )}
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered bg-transparent text-white w-[520px] "
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                />

                {errors.password && (
                  <span className="text-red-500 ">This Name is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    This Password Should be 6 caracter
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    This Password only 20 caracter
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    This Password Min 1 uppercase letter ,Min 1 lowercase letter
                    caracter
                  </span>
                )}
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white font-bold">Photo</span>
                </label>
                <input
                  type="file"
                  placeholder="Photo"
                  className="input input-bordered bg-transparent text-white w-[520px]"
                  {...register("Photo", { required: true })}
                />
                {errors.Photo && (
                  <span className="text-red-500 ">This Name is required</span>
                )}
              </div>

              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-bold"
                >
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                >
                  Sign in
                </button>
              </div>
              <p>
                All Ready Have account{" "}
                <span className="text-blue-600">
                  <Link to={"/Login"}>Login</Link>
                </span>
              </p>
              <div>
                <div className="flex space-x-4 ml-40">
                  <h1>
                    <button onClick={handlergooglelogin}>
                      <FcGoogle className="text-4xl" />
                    </button>
                  </h1>
                  <h1>
                    <button onClick={handlerfackbook}>
                      <SiFacebook className="text-4xl" />
                    </button>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
