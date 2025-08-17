import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";

describe("Recipe Selection Flow", () => {
  it("shows recipe details when a recipe card is clicked", () => {
    render(<Home />);

    const recipeCard = screen.getByRole("heading", { name: /chicken curry/i });
    fireEvent.click(recipeCard);

    expect(screen.getByRole("heading", { name: /chicken curry/i })).toBeInTheDocument();
    expect(screen.getByText(/warm & spicy/i)).toBeInTheDocument();
  });
});
