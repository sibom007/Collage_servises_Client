import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://img.freepik.com/free-photo/graduation-concept-with-students-holding-blank-certificate-template_23-2148201847.jpg?w=1380&t=st=1690048430~exp=1690049030~hmac=69ea7882ec8991ae9d477aab64843acb92718ffc5171d18e0ab3424dfb0e128c",

  "https://img.freepik.com/free-photo/happy-friends-gratuating_23-2148522250.jpg?w=740&t=st=1690048491~exp=1690049091~hmac=e20a8c93d938c4d54fbf683e75d103ce1aabf5c3b14b785ad80740d26240762c",

  "https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201832.jpg?w=1380&t=st=1690048517~exp=1690049117~hmac=598b5dddc6c53146b7aa2726c42c85be0d56d72d682392fe45c0f263b8f6de03",

  "https://img.freepik.com/premium-photo/students-university-people-wearing-mantles-group-students_115086-788.jpg?w=1380",

  "https://img.freepik.com/free-photo/three-happy-graduates-smiling-holding-diplomas_176420-14287.jpg?w=1380&t=st=1690048561~exp=1690049161~hmac=8f0577aa2e9469d886050a85856146df742b2a19d4bcf758da1ad13276268b1d",

  "https://img.freepik.com/free-photo/celebration-education-graduation-student-success-learning-concept_53876-147438.jpg?t=st=1690048422~exp=1690049022~hmac=1589e4302a3df466bfbd7176674384163fc9d8f8fc593383e9a929c40491033d",

  "https://img.freepik.com/free-photo/different-nationalities-university-graduates_7502-9436.jpg?w=1380&t=st=1690048619~exp=1690049219~hmac=446a5bf23f9b25f270d0110caf761611a7d3970037218f4e0c80d37bf7179686",

  "https://img.freepik.com/premium-photo/diverse-group-teenagers-shoot_53876-50177.jpg?w=1380",

  "https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201836.jpg?w=1380&t=st=1690048917~exp=1690049517~hmac=35d85408712f3f0a196cc34b96d233b578dcee3eac41c465e2419cfa60dd2b32",

  "https://img.freepik.com/premium-photo/happy-university-graduates-throwing-their-graduation-caps-into-air_627829-10090.jpg?w=1380",
];

const Collagegraduat = () => {
  const [data, setData] = useState({ img: " ", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    console.log(action);
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previouse-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            className="bg-white mt-6 p-2 rounded absolute lg:top-[40px] lg:right-[550px] right-0  top-[300px] "
            onClick={() => imgAction()}
          >
            X
          </button>
          <button
            onClick={() => imgAction("previouse-img")}
            className="relative border-2 border-blue-400 bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 left-40 top-40 lg:left-0 lg:top-0 "
          >
            previouse
          </button>
          <img
            src={data.img}
            style={{ width: "520px", maxWidth: "90%", maxHeight: "90%" }}
            alt=""
            className="mr-10 "
          />
          <button
            onClick={() => imgAction("next-img")}
            className="relative border-2 border-blue-400 bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 right-40 top-40 lg:right-0 lg:top-0"
          >
            Next
          </button>
        </div>
      )}
      <div className="p-10 z-40">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="15px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Collagegraduat;
