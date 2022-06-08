import { render, screen } from "@testing-library/react";
import Home from "../pages";

test("Should successfully rendering home page", async () => {
  render(<Home />);

  // Image
  const backgroundImage = screen.getByRole("img", {
    name: "Ramadan background",
  });

  expect(backgroundImage).toBeInTheDocument();

  // Enter button
  const linkElement = screen.getByRole("link", {
    name: "دخول"
  });

  expect(linkElement).toHaveAttribute("href", "/Calendar");
});
