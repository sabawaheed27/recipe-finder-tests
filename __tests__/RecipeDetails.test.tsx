import { render, screen } from "@testing-library/react";
import RecipeDetails from "../app/Components/RecipeDetails";
import { Recipe } from "@/data/recipes";

const recipe: Recipe = {
  id: 1,
  name: "Soup",
  description: "Hot soup",
  ingredients: ["water", "salt"],
  instructions: "Boil"
};

describe("RecipeDetails Component", () => {
  it("shows recipe title", () => {
    render(<RecipeDetails recipe={recipe} />);
    expect(screen.getByRole("heading", { name: /soup/i })).toBeInTheDocument();
  });

  it("lists all ingredients", () => {
    render(<RecipeDetails recipe={recipe} />);
    expect(screen.getAllByRole("listitem").length).toBe(recipe.ingredients.length);
  });
});
