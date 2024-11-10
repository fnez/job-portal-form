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
    { company: "", startDate: "", endDate: "", responsibilities: "" },
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

  //Updates the state data for UserForm via the setData hook
  const updateUserFormFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };

  const updateWorkFormFields = (
    fields: Partial<FormData> & { index?: number }
  ) => {
    setData((prev) => {
      // Updating a specific company in the companies array
      const { index, ...companyFields } = fields;
      const updatedCompanies = prev.companies.map((company, i) =>
        i === index ? { ...company, ...companyFields } : company
      );
      return {
        ...prev,
        companies: updatedCompanies,
      };
    });
  };

  const updateAdditionalInfoFormFields = (
    fields: Partial<FormData> & { language?: string; checked?: boolean }
  ) => {
    setData((prev) => {
      const updatedProgrammingLanguages = prev.programmingLanguages.map(
        (lang) => {
          if (lang[fields.language!]) {
            return {
              [fields.language!]: { checked: fields.checked! },
            };
          }
          return lang;
        }
      );

      return {
        ...prev,
        programmingLanguages: updatedProgrammingLanguages,
      };
    });
    console.log("data is : ", data);
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
    <UserForm {...data} updateFields={updateUserFormFields} />,
    <WorkForm {...data} updateFields={updateWorkFormFields} />,
    <AdditionalInfoForm
      {...data}
      updateFields={updateAdditionalInfoFormFields}
    />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return handleNext();
    alert("Succesful Account Creation");
  };

  return (
    <>
      <Link to="/" className="backToLoginLink">
        Back To Login Page
      </Link>{" "}
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          {step}

          {isLastStep && (
            <button type="submit" className="arrow">
              Submit
            </button>
          )}

          <div className="navigationContainer">
            <button
              type="button"
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
