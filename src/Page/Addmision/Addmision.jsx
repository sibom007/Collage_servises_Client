import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Addmision = () => {
  const Singledata = useLoaderData();
  const {
    _id,
    collegeImage,
    events,
    researchHistory,
    sports,
    collegeName,
    admissionDates,
  } = Singledata;
  const [submit, setdubmit] = useState(true);

  const VITE_IMG_PHOTO = import.meta.env.VITE_IMG_PHOTO;
  const VITE_IMG_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${VITE_IMG_PHOTO}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const name = data.name;
    const pnumber = data.pnumber;
    const address = data.address;
    const subject = data.subject;
    const date = data.date;

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(VITE_IMG_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgrespond) => {
        const Photo = imgrespond.data.display_url;
        const fromdata = {
          email,
          name,
          pnumber,
          address,
          date,
          Photo,
          collegeName,
          collegeImage,
          subject,
        };
        console.log(fromdata);

        fetch(`https://collage-servises-server.vercel.app/Candidatedata`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(fromdata),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              reset();
              setdubmit(false);
              Swal.fire({
                title: "Submit Successful",
                showClass: {
                  popup: "Update secssssss",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }
          });
      });
  };

  return (
    <>
      <div className="bg-[#cccccc] md:flex justify-evenly">
        <div>
          <img
            className="md:mt-52 w-[820px] h-[520px] mr-16  border-4 rounded shadow"
            src={collegeImage}
            alt=""
          />
        </div>

        <div className="md:mt-80 mb-60 ml-6">
          <h1 className="text-4xl font-semibold mb-3">{collegeName}</h1>
          <h1 className="text-xl font-semibold">
            {Singledata.events[0].eventName}
            {events[0].date}
          </h1>
          <h1 className="text-xl font-semibold">{admissionDates}</h1>

          {/* clofce digien */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200 w-9/12"
          >
            <div className="collapse-title text-xl font-medium">
              Researc hHistory of The collage
            </div>
            <div className="collapse-content">
              <p>{researchHistory.keyAchievements}</p>
            </div>
          </div>
          {/* sport */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200 mt-2 w-9/12"
          >
            <div className="collapse-title text-xl font-medium">
              Sport of Collage
            </div>
            <div className="collapse-content">
              <p>{sports.varsityTeams}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#cccccc] ">
        {/* md */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ml-6   mr-32 text-center border-8"
        >
          <h1 className="text-3xl font-semibold "> Fill The From</h1>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="name"
            className="input input-bordered input-md w-full max-w-xs ml-7 mb-4 mt-10"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="input input-bordered input-md w-full max-w-xs ml-7 mb-4 mt-10"
          />
          <br />
          <input
            type="text"
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="input input-bordered input-md w-full max-w-xs ml-7 mb-4"
          />
          <input
            type="text"
            {...register("pnumber", { required: true })}
            placeholder="Phone number"
            className="input input-bordered input-md w-full max-w-xs ml-7 mb-4"
          />
          <br />
          <input
            type="text"
            {...register("address", { required: true })}
            placeholder="Address"
            className="input input-bordered input-md w-full max-w-xs ml-7 mb-4"
          />
          <input
            type="date"
            {...register("date", { required: true })}
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs ml-7 mb-4"
          />
          <br />
          <input
            type="file"
            {...register("photo", { required: true })}
            placeholder="Photo"
            className="input input-bordered input-md w-6/12"
          />
          <br />

          {submit == true ? (
            <button className="shadow-lg border-yellow-700 border-b-4 bg-orange-600 mt-4 p-2 rounded hover:bg-orange-700 mb-6">
              <input type="submit" />
            </button>
          ) : (
            <button className="shadow-lg border-yellow-700 border-b-4 bg-orange-600 mt-4 p-2 rounded hover:bg-orange-700 mb-6">
              submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Addmision;
