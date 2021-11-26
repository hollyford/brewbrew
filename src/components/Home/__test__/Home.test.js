import { render, screen } from "@testing-library/react";
import Home from "../Home";
const mockData = {
    name: "testname",
    id: "testID",
    description: "testdescription"
}

test("renders loading...", () => {
    render(<Home />)
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
  });
describe("any props sent are rendered", () => {
  test("renders the home component with data", () => {
    render(<Home data={mockData}/>)
    const element = screen.getByText(/testname/i)
    expect(element).toBeInTheDocument();
  });

  test("renders the home component with data", () => {
    render(<Home data={mockData}/>)
    const element = screen.getByText(/testID/i)
    expect(element).toBeInTheDocument();
  });

  test("renders the home component with data", () => {
    render(<Home data={mockData}/>)
    const element = screen.getByText(/testdescription/i)
    expect(element).toBeInTheDocument();
  });
})

test("renders the button component", () => {
    render(<Home data={mockData}/>)
    const element = screen.getByTestId("buttonMain")
    expect(element).toBeInTheDocument();
  });