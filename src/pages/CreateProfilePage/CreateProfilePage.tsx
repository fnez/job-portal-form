import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useMultistepForm } from "../../hooks/useMultistepForm.ts";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { UserForm } from "../../components/UserForm/UserForm.tsx";
import { WorkForm } from "../../components/WorkForm/WorkForm.tsx";
import { AdditionalInfoForm } from "../../components/AdditionalInfoForm/AdditionalInfoForm.tsx";
import "./CreateProfilePage.css";

//Page containing the inner form components for creating a profile
export const CreateProfilePage = () => {
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    handlePrevious,
    handleNext,
  } = useMultistepForm([<UserForm />, <WorkForm />, <AdditionalInfoForm />]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <>
      <Link to="/" className="backToLoginLink">
        Back To Login Page
      </Link>{" "}
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          {step}
          <div className="navigationContainer">
            <button
              type="submit"
              className="arrow"
              onClick={handlePrevious}
              style={{ visibility: isFirstStep ? "hidden" : "initial" }}
            >
              <FaArrowCircleLeft />
            </button>

            <div className="pageIndicator">
              {currentStepIndex + 1} / {steps.length}
            </div>

            <button
              type="submit"
              className="arrow"
              style={{ visibility: isLastStep ? "hidden" : "initial" }}
            >
              <FaArrowCircleRight />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
