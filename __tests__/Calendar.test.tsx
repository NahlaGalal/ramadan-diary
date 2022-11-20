import { render, screen } from "@testing-library/react";
import Calendar from "../pages/Calendar";
import { weekDays } from "../utils/getDays";


test("should render Calendar page correctly", () => {
  render(<Calendar />);

  // Check for heading exist
  const heading = screen.getByRole("heading", {
    name: /إمساكية رمضان/i,
  });

  expect(heading).toBeInTheDocument();

  // Heading of table 
  const tableHeadingCells = screen.getAllByRole("columnheader");
  
  expect(tableHeadingCells).toHaveLength(7);
  tableHeadingCells.map((cell, i) => (
    expect(cell).toHaveTextContent(weekDays[i])
  ))

  // Number of rows
  const tableRows = screen.getAllByRole("row");

  expect(tableRows).toHaveLength(6);

  // Number of cells
  const tableCells = screen.getAllByRole("gridcell");

  expect(tableCells).toHaveLength(34);
});
