import { render, screen } from "@testing-library/react";
import Signup from "../pages/Signup";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("should render signup page successfully", () => {
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

test("should handle input validation successfully", async () => {
  render(<Signup />);

  // Click on Submit btn
  const submitBtn = screen.getByRole("button", {
    name: "تسجيل",
  });

  // Errors
  let noErrors = screen.queryByRole("alert");

  // Inputs
  const nameInput = screen.getByRole("textbox", {
    name: "الاسم",
  });
  const emailInput = screen.getByRole("textbox", {
    name: "البريد اﻹلكتروني",
  });
  const passwordInput = screen.getByLabelText("كلمة السر");
  const confirm_passwordInput = screen.getByLabelText("إعادة كلمة السر");

  // Clear Inputs
  await user.clear(nameInput);
  await user.clear(emailInput);
  await user.clear(passwordInput);
  await user.clear(confirm_passwordInput);

  // Check for initial
  expect(noErrors).not.toBeInTheDocument();

  // All fields are empty
  await user.click(submitBtn);
  let errors = await screen.findAllByRole("alert");
  expect(errors).toHaveLength(4);
  let errorsText = errors.map((err) => err.textContent);
  expect(errorsText).toEqual([
    "يجب كتابة الاسم قبل التسجيل",
    "يجب كتابة البريد اﻹلكتروني قبل التسجيل",
    "يجب كتابة كلمة السر قبل التسجيل",
    "يجب إعادة كتابة كلمة السر قبل التسجيل",
  ]);

  // All fields are not empty but not validated
  await user.type(nameInput, "abs");
  await user.type(emailInput, "fewf");
  await user.type(passwordInput, "123");
  await user.type(confirm_passwordInput, "123");
  let errors2 = await screen.findAllByRole("alert");

  expect(errors2).toHaveLength(4);
  errorsText = errors2.map((err) => err.textContent);
  expect(errorsText).toEqual([
    "يجب أن لا يقل الاسم عن 5 أحرف",
    "يجب كتابة بريد إلكتروني صحيح",
    "يجب أن لا تقل كلمة المرور عن 8 أحرف",
    "يجب أن لا تقل كلمة المرور عن 8 أحرف",
  ]);

  // All fields are valid but password and confirm password are not identical
  await user.type(nameInput, "asd1223");
  await user.type(emailInput, "@fe.com");
  await user.type(passwordInput, "45678");
  await user.type(confirm_passwordInput, "456789");
  let errors3 = await screen.findAllByRole("alert");

  expect(errors3).toHaveLength(1);
  errorsText = errors3.map((err) => err.textContent);
  expect(errorsText).toEqual(["كلمتا المرور غير متطابقتان"]);

  // All fields are valid
  await user.clear(confirm_passwordInput);
  await user.type(confirm_passwordInput, "12345678");
  let errors4 = screen.queryByRole("alert");

  expect(errors4).not.toBeInTheDocument();
});
