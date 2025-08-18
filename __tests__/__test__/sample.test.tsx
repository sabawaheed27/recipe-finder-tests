import { render, screen } from "@testing-library/react";

function TestComponent() {
  return <button>Click Me</button>;
}

describe("Sample Test", () => {
  it("renders button with correct text", () => {
    render(<TestComponent />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
