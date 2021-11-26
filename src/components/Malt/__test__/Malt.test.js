import { render, screen } from "@testing-library/react";
import Malt from "../Malt";
const mockData = {
    name: "maltname",
    amount: {
        value: "amountValue",
        unit: "amountUnit"
    }

}

test("renders loading...", () => {
    render(<Malt />)
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
});

test("renders the malt component with data", () => {
    render(<Malt malt={mockData} />)
    const element = screen.getByText(/maltname/i)
    expect(element).toBeInTheDocument();
});
test("renders the malt component with data", () => {
    render(<Malt malt={mockData} />)
    const element = screen.getByText(/amountValue/i)
    expect(element).toBeInTheDocument();
});
test("renders the malt component with data", () => {
    render(<Malt malt={mockData} />)
    const element = screen.getByText(/amountUnit/i)
    expect(element).toBeInTheDocument();
});
