import { render, screen, waitFor } from "@testing-library/react";
import Login from "../pages/Login";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("should render login page successfully", () => {
  render(<Login />);

  // Check for heading exist
  const heading = screen.getAllByRole("heading");

  expect(heading).toHaveLength(2);
  expect(heading[0]).toHaveTextContent("أهلا بك مرة أخري");
  expect(heading[1]).toHaveTextContent("سجل الآن");

  // Check for input are exist
  const emailInput = screen.getByRole("textbox", {
    name: "البريد اﻹلكتروني",
  });

  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute("type", "email");

  const passwordInput = screen.getByLabelText("كلمة السر");

  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type", "password");

  // Check for submit button is exist
  const submitBtn = screen.getByRole("button", {
    name: "دخول",
  });

  expect(submitBtn).toBeInTheDocument();
});

test("should handle input validation successfully", async () => {
  render(<Login />);

  // Click on Submit btn
  const submitBtn = screen.getByRole("button", {
    name: "دخول",
  });

  // Errors
  let noErrors = screen.queryByRole("alert");

  // Inputs
  const emailInput = screen.getByRole("textbox", {
    name: "البريد اﻹلكتروني",
  });
  const passwordInput = screen.getByLabelText("كلمة السر");

  // Clear Inputs
  await user.clear(emailInput);
  await user.clear(passwordInput);

  // Check for initial
  expect(noErrors).not.toBeInTheDocument();

  // All fields are empty
  await user.click(submitBtn);
  let errors = await screen.findAllByRole("alert");
  expect(errors).toHaveLength(2);
  let errorsText = errors.map((err) => err.textContent);
  expect(errorsText).toEqual([
    "يجب كتابة البريد اﻹلكتروني قبل التسجيل",
    "يجب كتابة كلمة السر قبل التسجيل",
  ]);

  // All fields are not empty but not validated
  await user.type(emailInput, "fewf");
  await user.type(passwordInput, "123");
  let errors2 = await screen.findAllByRole("alert");

  expect(errors2).toHaveLength(2);
  errorsText = errors2.map((err) => err.textContent);
  expect(errorsText).toEqual([
    "يجب كتابة بريد إلكتروني صحيح",
    "يجب أن لا تقل كلمة المرور عن 8 أحرف",
  ]);

  // All fields are valid
  await user.type(emailInput, "@fe.com");
  await user.type(passwordInput, "45678");
  let errors3 = screen.queryByRole("alert");

  expect(errors3).not.toBeInTheDocument();
});

test("should login successfully", async () => {
  render(<Login />);

  // Submit btn
  const submitBtn = screen.getByRole("button", {
    name: "دخول",
  });

  // Inputs
  const emailInput = screen.getByRole("textbox", {
    name: "البريد اﻹلكتروني",
  });
  const passwordInput = screen.getByLabelText("كلمة السر");

  // Clear Inputs
  await user.clear(emailInput);
  await user.clear(passwordInput);

  // All fields are validated
  await user.type(emailInput, "fewfd@dd.com");
  await user.type(passwordInput, "123456789");
  
  await waitFor(async () => {
    await user.click(submitBtn);
    expect(localStorage.getItem("ramadan-user")).not.toBeNull();
  });
});
