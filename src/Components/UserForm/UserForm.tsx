import { ProfileFormsWrapper } from "../ProfileFormsWrapper.tsx";
import { UserFormProps } from "../../types/Types.ts";
import "../GlobalFormStyles.css";

export const UserForm = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  updateFields,
}: UserFormProps) => {
  return (
    <ProfileFormsWrapper title="Personal Details">
      <label htmlFor="">First name</label>
      <input
        className="textInput"
        type="text"
        required
        autoFocus
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="">Last name</label>
      <input
        className="textInput"
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="">Email</label>
      <input
        className="textInput"
        type="text"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="">Phone Number</label>
      <input
        className="textInput"
        type="tel"
        name="phone"
        value={phoneNumber}
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
      />
    </ProfileFormsWrapper>
  );
};
