import { screen, render } from "@testing-library/react";
import Day from "../../pages/[Day]";

test("should successfully render day page", () => {
  render(<Day day="29"/>);

  // Heading with the day
  const heading = screen.getByRole("heading", {
    name: /\d رمضان/
  })

  expect(heading).toBeInTheDocument();

});
