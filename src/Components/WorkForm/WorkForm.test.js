import { render, screen, fireEvent } from "@testing-library/react";
import { WorkForm } from "./WorkForm";

const mockUpdateFields = jest.fn();
const mockAddWorkForm = jest.fn();

describe("WorkForm", () => {
  test("renders company input fields for each company", () => {
    const companies = [
      { company: "", startDate: "", endDate: "", responsibilities: "" },
    ];
    render(
      <WorkForm
        companies={companies}
        updateFields={mockUpdateFields}
        addWorkForm={mockAddWorkForm}
      />
    );

    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Responsibilities/i)).toBeInTheDocument();
  });

  test("calls addWorkForm when the add button is clicked", () => {
    const companies = [];
    render(
      <WorkForm
        companies={companies}
        updateFields={mockUpdateFields}
        addWorkForm={mockAddWorkForm}
      />
    );

    const addButton = screen.getByRole("button");
    fireEvent.click(addButton);
    expect(mockAddWorkForm).toHaveBeenCalled();
  });
});
