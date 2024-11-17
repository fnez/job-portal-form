import { ProfilePageProps } from "src/types/Types";
import { FaCircleUser } from "react-icons/fa6";
import "./ProfilePage.css";

export const ProfilePage = ({
  programmingLanguages,
  name,
  email,
  capitalize,
  companies,
  phoneNumber,
}: ProfilePageProps) => {
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

  return (
    <div className="userProfile">
      {/* About Section */}
      <section className="aboutSection">
        <h3>About</h3>
        <div className="info">
          <FaCircleUser className="profileImg" />
        </div>

        <div className="info">
          <div className="infoItem">
            <h4>Full Name</h4>
            <p>{name}</p>
          </div>
          <div className="infoItem">
            <h4>Email</h4>
            <p>{email}</p>
          </div>
          <div className="infoItem">
            <h4>Phone</h4>
            <p>{phoneNumber}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skillsSection">
        <h3>Skills</h3>
        <ul className="skillsList">
          {selectedLanguages.map((lang) => (
            <li key={lang} className="skillItem">
              {capitalize(lang)}
            </li>
          ))}
        </ul>
      </section>

      {/* Work History Section */}
      <section className="workHistorySection">
        <h3>Work History</h3>
        <ul className="workHistoryList">
          {companies.map((company, index) => (
            <li key={index} className="workHistoryItem">
              <h4>{company.company}</h4>
              <h5>Start Date: {company.startDate}</h5>
              <h5>End Date: {company.endDate}</h5>
              <p>{company.responsibilities}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
