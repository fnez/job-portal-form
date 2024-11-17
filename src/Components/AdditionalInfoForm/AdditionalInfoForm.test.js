import { render, screen, fireEvent } from "@testing-library/react";
import { AdditionalInfoForm } from "./AdditionalInfoForm";

const mockUpdateFields = jest.fn();

describe("AdditionalInfoForm", () => {
  test("renders programming language checkboxes", () => {
    const programmingLanguages = [
      { javascript: { checked: false } },
      { python: { checked: true } },
    ];
    render(
      <AdditionalInfoForm
        programmingLanguages={programmingLanguages}
        updateFields={mockUpdateFields}
      />
    );

    expect(screen.getByLabelText(/Javascript/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Python/i)).toBeInTheDocument();
  });

  test("calls updateFields when a checkbox is toggled", () => {
    const programmingLanguages = [{ javascript: { checked: false } }];
    render(
      <AdditionalInfoForm
        programmingLanguages={programmingLanguages}
        updateFields={mockUpdateFields}
      />
    );

    const javascriptCheckbox = screen.getByLabelText(/Javascript/i);
    fireEvent.click(javascriptCheckbox);
    expect(mockUpdateFields).toHaveBeenCalledWith({
      language: "javascript",
      checked: true,
    });
  });
});
