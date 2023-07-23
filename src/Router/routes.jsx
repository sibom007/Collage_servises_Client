import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Security/Login/Login";
import Signup from "../Page/Security/Signup/Signup";
import Error from "../Error/Error";
import Detailsdata from "../Page/Home/Collagecard/Detailsdata/Detailsdata";
import Collages from "../Page/collages/collages";
import Addmision from "../Page/Addmision/Addmision";
import MyCollage from "../Page/MyCollage/MyCollage";
import Addtoy from "../Page/Addtoypage/Addtoy";
import Privatedrouts from "./Privatedrouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Sign",
        element: <Signup />,
      },
      {
        path: "/Detailsdata/:id",
        element: (
          <Privatedrouts>
            <Detailsdata />
          </Privatedrouts>
        ),
        loader: ({ params }) =>
          fetch(
            `https://collage-servises-server.vercel.app/carddetels/${params.id}`
          ),
      },
      {
        path: "Collage",
        element: <Collages />,
      },
      {
        path: "/Admision/:id",
        element: <Addmision />,
        loader: ({ params }) =>
          fetch(
            `https://collage-servises-server.vercel.app/carddetels/${params.id}`
          ),
      },
      {
        path: "MyCollage",
        element: <MyCollage />,
      },
      {
        path: "Addtoy/:id",
        element: <Addtoy />,
        loader: ({ params }) =>
          fetch(
            `https://collage-servises-server.vercel.app/rivewerdata/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
