import { ProfileFormsWrapper } from "../ProfileFormsWrapper.tsx";
import { UserFormProps } from "../../types/Types.ts";
import "../GlobalFormStyles.css";

export const UserForm = ({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  updateFields,
}: UserFormProps) => {
  return (
    <ProfileFormsWrapper title="Personal Details">
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        className="textInput"
        type="text"
        required
        autoFocus
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        className="textInput"
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="email">Email</label>

      <input
        id="email"
        className="textInput"
        type="text"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        className="textInput"
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        className="textInput"
        type="tel"
        name="phone"
        value={phoneNumber}
        placeholder="Optional"
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
      />
    </ProfileFormsWrapper>
  );
};
