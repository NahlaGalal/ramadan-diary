import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "../components/FormInput";

const user = userEvent.setup();

test("should show / hide password input successfull", async () => {
  render(
    <FormInput
      id="password"
      label="password"
      placeholder="password"
      type="password"
      error={undefined}
    />
  );

  const passwordInput = screen.getByLabelText("password");
  const toggleBtn = screen.getByRole("button");

  // Password input
  expect(passwordInput).toHaveAttribute("type", "password");

  await user.click(toggleBtn);

  // Text input
  expect(passwordInput).toHaveAttribute("type", "text");
});
