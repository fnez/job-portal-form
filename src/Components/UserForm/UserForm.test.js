import { render, screen, fireEvent } from "@testing-library/react";
import { UserForm } from "./UserForm";

const mockUpdateFields = jest.fn();

describe("UserForm", () => {
  test("renders all input fields", () => {
    render(
      <UserForm
        firstName=""
        lastName=""
        email=""
        password=""
        phoneNumber=""
        updateFields={mockUpdateFields}
      />
    );
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  });

  test("calls updateFields on input change", () => {
    render(
      <UserForm
        firstName=""
        lastName=""
        email=""
        password=""
        phoneNumber=""
        updateFields={mockUpdateFields}
      />
    );

    const firstNameInput = screen.getByLabelText(/First name/i);
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(mockUpdateFields).toHaveBeenCalledWith({ firstName: "John" });
  });
});
