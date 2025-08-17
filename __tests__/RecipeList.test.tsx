import { render, screen } from "@testing-library/react";
import RecipeList from "../app/Components/RecipeList";
import { recipes } from "../data/recipes";

describe("RecipeList Component", () => {
  it("renders all recipes", () => {
    render(<RecipeList recipes={recipes} favorites={[]} onToggleFavorite={() => { } } onSelect={function (id: number): void {
        throw new Error("Function not implemented.");
    } } />);
    expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(recipes.length);
  });

  it("filters when recipes array is empty", () => {
    render(<RecipeList recipes={[]} favorites={[]} onToggleFavorite={() => { } } onSelect={function (id: number): void {
        throw new Error("Function not implemented.");
    } } />);
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
  });
});
