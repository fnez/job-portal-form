import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { JobBoardPageProps } from "src/types/Types.ts";
import "./JobBoardPage.css";

export const JobBoardPage = ({
  jobData,
  name,
  email,
  handleSend,
}: JobBoardPageProps) => {
  //State for search input and location
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  //filters jobs based on search query and location
  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.title
      .toLocaleLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocation === "" || job.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  // Location options for the dropdown
  const uniqueLocations = Array.from(
    new Set(jobData.map((job) => job.location))
  );

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
        {/* Search Input */}
        <div className="filterContainer">
          <label htmlFor="search">Search by job role</label>
          <input
            type="text"
            name="search"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="searchInput"
          />
        </div>
        {/* Location selection */}
        <div className="selectContainer">
          <label htmlFor="location">Select a location</label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="locationFilter"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="jobBoard">
        <ul>
          {filteredJobs.map((job) => (
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
