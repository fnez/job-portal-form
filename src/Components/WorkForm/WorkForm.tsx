import React from "react";
import { ProfileFormsWrapper } from "../ProfileFormsWrapper.tsx";
import { FaCirclePlus } from "react-icons/fa6";
import { WorkFormProps } from "../../types/Types.ts";
import "../GlobalFormStyles.css";

export const WorkForm = ({
  companies,
  updateFields,
  addWorkForm,
}: WorkFormProps) => {
  return (
    <>
      <ProfileFormsWrapper title="Work Experience">
        {companies.map(
          ({ company, startDate, endDate, responsibilities }, index) => (
            <React.Fragment key={index}>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                className="textInput"
                type="text"
                required
                autoFocus
                value={company}
                onChange={(e) =>
                  updateFields({ company: e.target.value, index })
                }
              />
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                className="textInput"
                type="date"
                required
                value={startDate}
                onChange={(e) =>
                  updateFields({ startDate: e.target.value, index })
                }
              />
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                className="textInput"
                type="date"
                required
                value={endDate}
                onChange={(e) =>
                  updateFields({ endDate: e.target.value, index })
                }
              />
              <label htmlFor="responsibilities">Responsibilities</label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                rows={5}
                cols={40}
                placeholder="Led a team of developers..."
                className="textInput"
                value={responsibilities}
                onChange={(e) =>
                  updateFields({ responsibilities: e.target.value, index })
                }
              ></textarea>
            </React.Fragment>
          )
        )}
      </ProfileFormsWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "36px 0",
        }}
      >
        <button
          onClick={addWorkForm}
          style={{
            border: "none",
            background: "transparent",
          }}
        >
          <FaCirclePlus
            style={{
              color: "white",
              fontSize: "32px",
              cursor: "pointer",
            }}
          />
        </button>
      </div>
    </>
  );
};
