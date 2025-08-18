import { render, screen } from "@testing-library/react";

// Define local Recipe type
type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
};

//  Mock RecipeDetails component
type RecipeDetailsProps = {
  recipe: Recipe;
};

function RecipeDetails({ recipe }: RecipeDetailsProps) {
  return (
    <article>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
    </article>
  );
}

// Sample recipe for testing
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
