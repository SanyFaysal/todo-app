import React from "react";
import moment from "moment";

export default function ListCard({ item }) {
  return (
    <div className="p-5  bg-sky-50 text-gray-700  rounded-lg text-lg mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-sky-400">
          {moment(item?.date).format("dddd")}
        </h1>
        <p className="  text-sky-400">
          {moment(item?.date).format("MMMM Do YYYY")}
        </p>
      </div>
      <h1 className="mt-5 text-2xl font-semibold">{item?.title}</h1>

      <p className="mt-2">{item?.desc?.slice(0, 200)}</p>
    </div>
  );
}
