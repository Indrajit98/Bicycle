import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [companyName, setCompanyName] = useState();

  useEffect(() => {
    fetch(`https://bicyle-server-side-indrajit98.vercel.app/companyName`)
      .then((res) => res.json())
      .then((data) => {
        setCompanyName(data);
      });
  }, []);
  return (
    <div  data-aos="fade-up-right">
      <div className=" shadow-lg mr-4">
        <div className=" md:col-span-3 p-4 ">
          <h1 className="md:text-3xl text-2xl font-semibold text-center text-slate-800  ">
            Company Name
          </h1>
          {companyName?.map((name, i) => (
            <div key={i}>
              <ul className="menu menu-compact bg-base-100 w-56 p-2 rounded-box">
                <li>
                  <Link to={`/products/${name.Company_name}`} className="text-xl text-slate-800">
                    {name.Company_name}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className=" col-span-9 bg-slate-300">
          {/* <Products></Products> */}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
