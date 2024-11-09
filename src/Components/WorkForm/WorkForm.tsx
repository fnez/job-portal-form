import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

export const WorkForm = () => {
  return (
    <>
      <label htmlFor="">Company</label>
      <input type="text" required autoFocus />
      <label htmlFor="">Start Date</label>
      <input type="text" required />
      <label htmlFor="">End Date</label>
      <input type="text" required />
      <label htmlFor="">Responsibilities</label>
      <input type="text" required />

      <div>
        <FaCirclePlus />
      </div>
    </>
  );
};
