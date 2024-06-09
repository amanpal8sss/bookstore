import React from "react";

function Cards({ cardItem }) {
  return (
    <>
      <div className="mt-4 my-3 p-4 cursor-pointer">
        <div className="card  w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 ">
          <figure>
            <img src={cardItem.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {cardItem.name}
              <div className="badge badge-secondary">{cardItem.category}</div>
            </h2>
            <p>{cardItem.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline mt-2">${cardItem.price}</div>
              <div className=" px-2 py-1 rounded-full  border-[2px] hover:bg-pink-600 text-white-500 duration-200 cursor-pointer ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
