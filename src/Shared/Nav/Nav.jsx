import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyAuthcontext } from "../../Provider/Authprovider";

const Nav = () => {
  const { user, Logout } = useContext(MyAuthcontext);

  const handleLogout = () => {
    Logout();
  };

  const navitem = (
    <>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={'/Collage'}>
        <li>Colleges</li>
      </Link>
      <Link to={'/MyCollage'}><li>My College</li></Link>
      
      {user ? (
        <Link onClick={handleLogout}>Logout</Link>
      ) : (
        <Link to={"Login"}>
          <li>Login</li>
        </Link>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-black bg-opacity-60 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-blue-500 bg-base-100 rounded-box w-52"
            >
              {navitem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-slate-300">
            College Admission
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-200 space-x-5">
            {navitem}
          </ul>
        </div>
        <div className=" tooltip tooltip-bottom ml-24 md:-ml-12" data-tip={user?.displayName}>
          <img className="w-16 rounded-full" src={user?.photoURL} />
        </div>
       
      </div>
    </div>
  );
};

export default Nav;
