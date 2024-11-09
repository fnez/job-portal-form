import React, { useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm.ts";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { UserForm } from "../../components/UserForm/UserForm.tsx";
import { WorkForm } from "../../components/WorkForm/WorkForm.tsx";
import { AdditionalInfoForm } from "../../components/AdditionalInfoForm/AdditionalInfoForm.tsx";
import "./CreateProfilePage.css";

export const CreateProfilePage = () => {
  const formTitles = ["Personal Details", "Work Experience", "Additional Info"];
  const [formTitle, setFormTitle] = useState(formTitles[0]);

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    handlePrevious,
    handleNext,
  } = useMultistepForm([<UserForm />, <WorkForm />, <AdditionalInfoForm />]);

  return (
    <div className="formContainer">
      <form action="">
        <h1>{formTitle}</h1>
        <div className="pageIndicator">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button
              type="button"
              className="arrow"
              onClick={() => {
                handlePrevious();
                setFormTitle(formTitles[currentStepIndex - 1]);
              }}
            >
              <FaArrowCircleLeft />
            </button>
          )}

          {!isLastStep && (
            <button
              type="button"
              className="arrow"
              onClick={() => {
                handleNext();
                setFormTitle(formTitles[currentStepIndex + 1]);
              }}
            >
              <FaArrowCircleRight />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
