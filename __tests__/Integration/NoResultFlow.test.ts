import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";

describe("No Results Flow", () => {
  it("shows a message when no recipes match the search", () => {
    render(<Home />);

    const searchInput = screen.getByRole("textbox", { name: /search/i });
    fireEvent.change(searchInput, { target: { value: "zzzzzz" } });

    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(screen.getByText(/no recipes found/i)).toBeInTheDocument();
  });
});
