import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useMultistepForm } from "../../hooks/useMultistepForm.ts";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { UserForm } from "../../components/UserForm/UserForm.tsx";
import { WorkForm } from "../../components/WorkForm/WorkForm.tsx";
import { AdditionalInfoForm } from "../../components/AdditionalInfoForm/AdditionalInfoForm.tsx";
import "./CreateProfilePage.css";
import { FormData } from "src/types/Types.ts";

//Initial form data, before state updates
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companies: [
    { company: "1", startDate: "", endDate: "", responsibilities: "" },
  ],
  programmingLanguages: [
    { ruby: { checked: false } },
    { python: { checked: false } },
    { php: { checked: false } },
    { javascript: { checked: false } },
    { c: { checked: false } },
    { cPlusPlus: { checked: false } },
    { rust: { checked: false } },
    { go: { checked: false } },
  ],
};

//Page containing the inner form components for creating a profile
export const CreateProfilePage = () => {
  const [data, setData] = useState(INITIAL_DATA);
  //sets the state data via the setData hook
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    handlePrevious,
    handleNext,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <WorkForm {...data} updateFields={updateFields} />,
    <AdditionalInfoForm {...data} updateFields={updateFields} />,
  ]);

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
