import { render, screen } from "@testing-library/react";
import moment from "moment";
import { Day } from "types";
import EditDay from "./EditDay";
moment.locale("ka");

test("it renders date correctly for current week", () => {
  const day: Day = {
    date: moment().startOf("week").toISOString(),
    description: "",
    id: "id",
  };

  render(<EditDay day={day} onEdit={() => {}} />);

  const date = screen.getByRole("heading");

  expect(date).toHaveTextContent("ორშაბათი");
});

test("it renders date correctly for past year", () => {
  const day: Day = {
    date: moment("2022").toISOString(),
    description: "",
    id: "id",
  };

  render(<EditDay day={day} onEdit={() => {}} />);

  const date = screen.getByRole("heading");

  expect(date).toHaveTextContent("1 იანვარი, 2022");
});

test("it renders date correctly past weeks", () => {
  const day: Day = {
    date: moment().startOf("year").toISOString(),
    description: "",
    id: "id",
  };

  render(<EditDay day={day} onEdit={() => {}} />);

  const date = screen.getByRole("heading");

  expect(date).toHaveTextContent("1 იანვარი");
});
