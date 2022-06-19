import { render, screen } from "@testing-library/react";
import Signup from "../pages/Signup";

test("should render login page successfully", () => {
  render(<Signup />);

  // Check for heading exist
  const heading = screen.getAllByRole("heading");

  expect(heading).toHaveLength(2);
  expect(heading[0]).toHaveTextContent("أهلا بك في يوميات رمضان");
  expect(heading[1]).toHaveTextContent("سجل الآن");

  // Check for input are exist
  const nameInput = screen.getByRole("textbox", {
    name: "الاسم",
  });

  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveAttribute("type", "text");

  const emailInput = screen.getByRole("textbox", {
    name: "البريد اﻹلكتروني",
  });

  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute("type", "email");

  const passwordInput = screen.getByLabelText("كلمة السر");

  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type", "password");

  const confirm_passwordInput = screen.getByLabelText("إعادة كلمة السر");

  expect(confirm_passwordInput).toBeInTheDocument();
  expect(confirm_passwordInput).toHaveAttribute("type", "password");

  // Check for submit button is exist
  const submitBtn = screen.getByRole("button", {
    name: "تسجيل",
  });

  expect(submitBtn).toBeInTheDocument();
});
