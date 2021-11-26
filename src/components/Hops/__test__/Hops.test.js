import { render, screen } from "@testing-library/react";
import Hops from "../Hops";
const mockData = {
    name: "hopName",
    amount: {
        value: "amountValue",
        unit: "amountUnit"
    }
}
test("renders loading...", () => {
    render(<Hops />)
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
});

test("renders the malt component with data", () => {
    render(<Hops hop={mockData} />)
    const element = screen.getByText(/hopName/i)
    expect(element).toBeInTheDocument();
});
test("renders the malt component with data", () => {
    render(<Hops hop={mockData} />)
    const element = screen.getByText(/amountValue/i)
    expect(element).toBeInTheDocument();
});
test("renders the malt component with data", () => {
    render(<Hops hop={mockData} />)
    const element = screen.getByText(/amountUnit/i)
    expect(element).toBeInTheDocument();
});