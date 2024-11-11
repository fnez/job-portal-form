import { FormData } from "../types/Types.ts";

//Data to initialize the form, before state updates
export const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
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
