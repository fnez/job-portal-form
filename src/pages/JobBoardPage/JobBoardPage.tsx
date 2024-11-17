import { FaCircleUser } from "react-icons/fa6";
import { JobBoardPageProps } from "src/types/Types.ts";
import "./JobBoardPage.css";

export const JobBoardPage = ({
  jobData,
  name,
  email,
  handleSend,
}: JobBoardPageProps) => {
  return (
    <div className="jobBoardContainer">
      <div className="panel">
        <div className="bioContainer">
          <div className="profileDetailsContainer">
            <FaCircleUser className="profileImg" />
            <div className="profileDetails">
              <h2>{name}</h2>
              <span>{email}</span>
            </div>
          </div>
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
                  <button type="button" onClick={() => handleSend(job.id)}>
                    Send Application
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
