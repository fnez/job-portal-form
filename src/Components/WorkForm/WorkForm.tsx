import React from "react";
import { ProfileFormsWrapper } from "../ProfileFormsWrapper.tsx";
import { FaCirclePlus } from "react-icons/fa6";

export const WorkForm = () => {
  return (
    <>
      <ProfileFormsWrapper title="Work Experience">
        <label htmlFor="">Company</label>
        <input
          style={{ padding: "6px", fontSize: "24px" }}
          type="text"
          required
          autoFocus
        />
        <label htmlFor="">Start Date</label>
        <input
          style={{ padding: "6px", fontSize: "24px" }}
          type="date"
          required
        />
        <label htmlFor="">End Date</label>
        <input
          style={{ padding: "6px", fontSize: "24px" }}
          type="date"
          required
        />
        <label htmlFor="">Responsibilities</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          rows="5"
          cols="40"
          placeholder="Led a team of developers..."
          style={{ padding: "6px", fontSize: "24px" }}
        ></textarea>
      </ProfileFormsWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "36px 0",
        }}
      >
        <FaCirclePlus
          style={{
            color: "tomato",
            fontSize: "32px",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
};
