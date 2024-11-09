import React from "react";
import { ProfileFormsWrapper } from "../ProfileFormsWrapper.tsx";

export const UserForm = () => {
  return (
    <ProfileFormsWrapper title="Personal Details">
      <label htmlFor="">First name</label>
      <input
        style={{ padding: "6px", fontSize: "24px" }}
        type="text"
        required
        autoFocus
      />
      <label htmlFor="">Last name</label>
      <input
        style={{ padding: "6px", fontSize: "24px" }}
        type="text"
        required
      />
      <label htmlFor="">Email</label>
      <input
        style={{ padding: "6px", fontSize: "24px" }}
        type="text"
        required
      />
      <label htmlFor="">Phone Number</label>
      <input
        style={{ padding: "6px", fontSize: "24px" }}
        type="tel"
        name="phone"
      />
    </ProfileFormsWrapper>
  );
};
