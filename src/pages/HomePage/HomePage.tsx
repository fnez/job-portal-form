import React, { useContext, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext.tsx";
import { INITIAL_DATA } from "../../data/initialFormData.ts";

export const HomePage = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const { firstName, lastName, email, programmingLanguages } = data;

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

  return (
    <>
      <div className="navigationBar">
        <button type="button" onChange={handleLogout}>
          Logout
        </button>
      </div>
      <div className="panel">
        <div className="bioContainer">
          {/* <img src="" alt="profile-picture" />
           */}
          <FaCircleUser />
          <h1>{name}</h1>
          <span>{email}</span>

          <h2>Skills</h2>
          <ul>
            {selectedLanguages.map((lang) => (
              <li key={lang}>{capitalize(lang)}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
