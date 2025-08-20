import { render, screen, fireEvent } from "@testing-library/react";
import RecipeCard from "../app/Components/RecipeCard";
import { Recipe } from "@/data/recipes";

const mockRecipe: Recipe = {
  id: 1,
  name: "Pasta",
  description: "Yummy pasta",
  ingredients: ["flour"],
  instructions: "Boil"
};

describe("RecipeCard Component", () => {
  it("displays recipe name", () => {
    render(<RecipeCard recipe={mockRecipe} isFavorite={false} onToggleFavorite={() => {}} onSelect={() => {}} />);
    expect(screen.getByText("Pasta")).toBeInTheDocument();
  });

  it("shows favorite button", () => {
    render(<RecipeCard recipe={mockRecipe} isFavorite={false} onToggleFavorite={() => {}} onSelect={() => {}} />);
    expect(screen.getByRole("button", { name: /add to favorites/i })).toBeInTheDocument();
  });

  it("calls onToggleFavorite when clicked", () => {
    const mockFn = jest.fn();
    render(<RecipeCard recipe={mockRecipe} isFavorite={false} onToggleFavorite={mockFn} onSelect={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /add to favorites/i }));
    expect(mockFn).toHaveBeenCalledWith(1);
  });

  it("shows 'Unfavorite' when isFavorite is true", () => {
    render(<RecipeCard recipe={mockRecipe} isFavorite={true} onToggleFavorite={() => {}} onSelect={() => {}} />);
    expect(screen.getByRole("button", { name: /remove from favorites/i })).toBeInTheDocument();
  });
});
