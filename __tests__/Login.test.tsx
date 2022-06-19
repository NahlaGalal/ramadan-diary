import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

test("should render login page successfully", () => {
  render(<Login />);

  // Check for heading exist
  const heading = screen.getByRole("heading", {
    name: /Login/i,
  });

  expect(heading).toBeInTheDocument();
});
