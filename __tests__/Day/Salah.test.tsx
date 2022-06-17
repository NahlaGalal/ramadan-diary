import { screen, render } from "@testing-library/react";
import Salah from "../../components/Salah";

test("should successfully render salah component", () => {
  render(<Salah />);

  // Heading with text `الصلاة`
  const heading = screen.getByRole("heading", {
    name: /الصلاة/,
  });

  expect(heading).toBeInTheDocument();

  // Fajr checkboxes
  const fajrCheckboxes = screen.getAllByRole("checkbox", {
    name: "fajr"
  })

  expect(fajrCheckboxes).toHaveLength(2);

  // Dhuhr checkboxes
  const dhuhrCheckboxes = screen.getAllByRole("checkbox", {
    name: "dhuhr",
  });

  expect(dhuhrCheckboxes).toHaveLength(3);

  // Asr checkboxes
  const asrCheckboxes = screen.getAllByRole("checkbox", {
    name: "asr",
  });

  expect(asrCheckboxes).toHaveLength(1);

  // Maghrib checkboxes
  const maghribCheckboxes = screen.getAllByRole("checkbox", {
    name: "maghrib",
  });

  expect(maghribCheckboxes).toHaveLength(2);

  // Isha checkboxes
  const ishaCheckboxes = screen.getAllByRole("checkbox", {
    name: "isha",
  });

  expect(ishaCheckboxes).toHaveLength(2);
});
