import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext.tsx";
import { INITIAL_DATA } from "../../data/initialFormData.ts";
import { JOB_BOARD_DATA } from "../../data/jobBoardData.ts";
import "./HomePage.css";
import { JobBoardPage } from "../JobBoardPage/JobBoardPage.tsx";
import { ProfilePage } from "../ProfilePage/ProfilePage.tsx";

export const HomePage = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const {
    firstName,
    lastName,
    email,
    programmingLanguages,
    companies,
    phoneNumber,
  } = data;
  const [jobData, setJobData] = useState(JOB_BOARD_DATA);
  const [activePage, setActivePage] = useState("home");

  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  const name = `${capitalize(firstName)} ${capitalize(lastName)}`;

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

  const handleNavigation = () => {
    const active = activePage === "home" ? "profile" : "home";
    setActivePage(active);
  };

  return (
    <div className="mainContainer">
      <div className="navigationBar">
        {" "}
        <button onClick={handleNavigation}>Job Board</button>
        <button onClick={handleNavigation}>Profile</button>
        <button className="logoutBtn" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {activePage === "home" && (
        <JobBoardPage
          jobData={jobData}
          name={name}
          email={email}
          handleSend={handleSendApplication}
        />
      )}
      {activePage === "profile" && (
        <ProfilePage
          programmingLanguages={programmingLanguages}
          name={name}
          capitalize={capitalize}
          email={email}
          companies={companies}
          phoneNumber={phoneNumber}
        />
      )}
    </div>
  );
};
