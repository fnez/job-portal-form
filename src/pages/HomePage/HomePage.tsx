import React, { useContext, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext.tsx";
import { INITIAL_DATA } from "../../data/initialFormData.ts";
import { JOB_BOARD_DATA } from "../../data/jobBoardData.ts";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const { firstName, lastName, email, programmingLanguages } = data;
  const [jobData, setJobData] = useState(JOB_BOARD_DATA);

  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  const name = `${capitalize(firstName)} ${capitalize(lastName)}`;

  const selectedLanguages = programmingLanguages
    .filter((lang) => {
      const key = Object.keys(lang)[0];
      return lang[key].checked;
    })
    .map((lang) => {
      if (Object.keys(lang)[0] === "cPlusPlus") {
        return "C++";
      }
      return Object.keys(lang)[0];
    });

  const handleLogout = () => {
    setData(INITIAL_DATA);
    navigate("/");
  };

  const handleSendApplication = (jobId: number) => {
    setJobData((prevData) =>
      prevData.map((job) =>
        job.id === jobId ? { ...job, applied: true } : job
      )
    );
  };

  return (
    <>
      <div className="navigationBar">
        {" "}
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="homePageContainer">
        <div className="panel">
          <div className="bioContainer">
            {/* <img src="" alt="profile-picture" />
             */}
            <div className="profileDetailsContainer">
              <FaCircleUser className="profileImg" />
              <div className="profileDetails">
                <h2>{name}</h2>
                <span>{email}</span>
              </div>
            </div>

            <h3>Skills</h3>
            <ul className="skills">
              {selectedLanguages.map((lang) => (
                <li key={lang}>{capitalize(lang)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jobBoard">
          <ul>
            {jobData.map((job) => (
              <li className={job.applied ? "sent" : ""}>
                <div className="jobInfoContainer">
                  <h3>{job.title}</h3>
                  <div className="jobInfo">
                    <p>{job.company}</p>—<span>{job.location}</span>
                  </div>
                </div>
                <div className="status">
                  {job.applied ? (
                    <span className="sentText">Application Sent!</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSendApplication(job.id)}
                    >
                      Send Application
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
