import React, { useState, useContext } from "react";
import UserContext from "../context/UserProvider";
const SeatsOrder = () => {
  const [seats, setSeats] = useState([]);
  const { adultAmount, chilrenAmount } = useContext(UserContext);
  const seatsArray = new Array(15).fill(new Array(20).fill(""));
  const seatIds = (a, b) => {
    setSeats((seats) => [...seats, { row: a, col: b }]);
    seats.map((seat) => console.log(seat));
  };

  return (
    <div className="max-w-screen-md mx-auto mt-10 flex flex-col items-center justify-center">
      <h1 className="mb-10">Суудлын дугаараа сонгоно уу?</h1>
      <div className="w-96 h-96 flex items-center justify-center flex-col">
        {seatsArray.map((row, j) => (
          <div className="flex justify-between gap-1" key={j}>
            {row.map((col, i) => (
              <button
                onClick={seatIds}
                key={i}
                className="h-4 w-4 bg-gray-400 my-1 rounded-sm"
              ></button>
            ))}
          </div>
        ))}
      </div>
      <div className="w-[500px]">
        <div className="flex justify-between w-full">
          <h1 className="whitespace-nowrap">Таны нэр</h1>
          <h1 className="whitespace-nowrap">Суудлын дугаар</h1>
          <h1 className="whitespace-nowrap">Суудлын тоо</h1>
          <h1 className="whitespace-nowrap">Төлбөр</h1>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="text-center">Amgalan</h1>
          <h1 className="text-center"></h1>
          <div className="flex flex-col items-center justify-center">
            <h1>Том хүн: {adultAmount}</h1>
            <h1>Хүүхэд: {chilrenAmount}</h1>
          </div>
          <div className="text-center">
            <h1>{adultAmount * 10000 + chilrenAmount * 5000}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatsOrder;
