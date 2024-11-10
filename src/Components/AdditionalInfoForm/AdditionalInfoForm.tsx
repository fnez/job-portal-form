import React from "react";
import { ProfileFormsWrapper } from "../ProfileFormsWrapper.tsx";
import { AdditionalInfoFormProps } from "../../types/Types.ts";
import "./AdditionalInfoForm.css";

const getLanguageLabel = (name: string) => {
  if (name === "cPlusPlus") return "C++";
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const AdditionalInfoForm = ({
  programmingLanguages,
  updateFields,
}: AdditionalInfoFormProps) => {
  const handleCheckboxChange = (language: string, checked: boolean) => {
    updateFields({ language, checked });
  };

  return (
    <ProfileFormsWrapper title="Additional Info">
      <fieldset className="fieldSet">
        <legend>Programming Languages:</legend>
        <div className="fieldsContainer">
          {programmingLanguages.map((lang, index) => {
            const languageName = Object.keys(lang)[0];
            const isChecked = lang[languageName].checked;
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={languageName}
                  name={languageName}
                  checked={isChecked}
                  onChange={(e) =>
                    handleCheckboxChange(languageName, e.target.checked)
                  }
                />
                <label htmlFor={languageName}>
                  {getLanguageLabel(languageName)}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </ProfileFormsWrapper>
  );
};
