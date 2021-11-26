import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

const mockData = {
    children: [<h3 />, <p />],
    show: true,
    tips: true,
    setOppositeModal: () => { },
    setShow: () => { }
}
test("renders loading...", () => {
    render(<Modal children="" />);
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
});

test("renders a header", () => {
    render(<Modal children={mockData.children} show={mockData.show}/>);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
});

test("renders the close text", () => {
    render(<Modal children={mockData.children} show={mockData.show} />);
    const element = screen.getByText(/close/i)
    expect(element).toBeInTheDocument();
});

test("element clicked triggers event to display correct modal", () => {
    render(<Modal children={mockData.children} setOppositeModal={mockData.setOppositeModal} setShow={mockData.setShow} tips={mockData.tips}/>)
    const element = screen.getByTestId("modalContainer")
    fireEvent.click(element)
    const tipElement = screen.getByText(/see tips/i)
    expect(tipElement).toBeInTheDocument()
})