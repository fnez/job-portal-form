import React from "react";

export const UserForm = () => {
  return (
    <>
      <label htmlFor="">First name</label>
      <input type="text" required autoFocus />
      <label htmlFor="">Last name</label>
      <input type="text" required />
      <label htmlFor="">Email</label>
      <input type="text" required />
      <label htmlFor="">Phone Number</label>
      <input type="number" max={10} />
    </>
  );
};
