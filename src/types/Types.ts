//CreateProfilePage Data types
export type Company = {
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
};

export type ProgrammingLanguages = {
  [language: string]: { checked: boolean };
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companies: Company[];
  programmingLanguages: ProgrammingLanguages[];
};

// UserForm Component types
type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

//WorkForm Data types
type CompanyData = {
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
};

type CompaniesData = CompanyData[];

export type WorkFormProps = {
  companies: CompaniesData;
  updateFields: (fields: Partial<CompanyData> & { index: number }) => void;
};

//AdditionalInfoForm Data types
export type AdditionalInfoFormProps = {
  programmingLanguages: ProgrammingLanguages[];
  updateFields: (fields: Partial<ProgrammingLanguages>) => void;
};
