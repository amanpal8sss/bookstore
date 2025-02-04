import React from "react";
import books from "../assets/books.webp";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl p-8 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12">
        <div className="w-full md:w-1/2 md:order-1 order-2">
          <div className="space-y-12 mt-12 md:mt-32">
            <h1 className="text-4xl font-bold">
              Hello Everyone here are some books which you can read
              <span className="text-red-500"> Every day!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              aspernatur itaque quas nulla quisquam, consequuntur animi odio
              minus sed explicabo atque est cumque hic eveniet quae obcaecati
              quam.
            </p>
          </div>
          <div className="mt-8">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div>
            <button className="btn bg-red-500 cursor-pointer text-white mt-8 ">
              Secondary
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5  order-1 ">
          <img src={books} alt="error img loading" />
        </div>
      </div>
    </>
  );
}

export default Banner;
