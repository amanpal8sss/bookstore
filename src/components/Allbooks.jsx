import React from "react";
import list from "../assets/list.json";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

function Allbooks() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 p-10 items-center justify-center text-center tex">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-2xl md:text-4xl text-pink-500">here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit non debitis impedit inventore itaque libero possimus
            delectus repudiandae nobis! Minima explicabo amet assumenda
            blanditiis quod a, debitis fugiat sequi dolorem?
          </p>
          <Link to="/">
            <button className="btn btn-secondary text-white mt-6 ">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-items-center">
          {list.map((item) => (
            <Cards cardItem={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Allbooks;
