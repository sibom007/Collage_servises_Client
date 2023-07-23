import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Addtoy = () => {
  const lodedata = useLoaderData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newdata = {
      name: data.Name,
      Rating: data.rating,
      img: lodedata.collegeImage,
      collagename: lodedata.collegeName,
    };

    fetch(`https://collage-servises-server.vercel.app/rivewerdata`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
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
  };

  return (
    <div className="bg-gray-200 p-24">
      <h1 className="font-bold text-center text-3xl mb-5">Add New Toy data</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* form row */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                {...register("Name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                {...register("rating", { required: true })}
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Feed back</span>
          </label>
          <label className="input-group">
            <textarea
              {...register("text", { required: true })}
              className="textarea h-24 w-9/12"
              placeholder="Feed back"
            ></textarea>
          </label>
        </div>

        <div className="md:flex">
          <div className="form-control w-1/2 mr-4 hidden">
            <label className="label">
              <span className="label-text">seller email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={lodedata.collegeImage}
                name="selleremail"
                placeholder="Rating"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <button className="ml-[640px] mt-6 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
          {" "}
          <input type="submit" />
        </button>
      </form>
    </div>
  );
};

export default Addtoy;
