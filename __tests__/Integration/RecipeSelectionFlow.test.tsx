import React, { useState } from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";

// Mock Home component
function Home() {
  const recipes = [
    { id: 1, name: "Chicken Curry", description: "Warm & Spicy" },
    { id: 2, name: "Pizza", description: "Cheesy" },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState<null | typeof recipes[0]>(null);

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            style={{ cursor: "pointer" }}
          >
            <h2>{recipe.name}</h2>
          </article>
        ))}
      </div>

      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.name}</h2>
          <p>{selectedRecipe.description}</p>
        </div>
      )}
    </div>
  );
}

describe("Recipe Selection Flow", () => {
  it("shows recipe details when a recipe card is clicked", () => {
    render(<Home />);

    // Find the recipe card 
    const recipeCard = screen.getByText(/chicken curry/i);
    fireEvent.click(recipeCard);

    const detailsSection = screen.getByText(/warm & spicy/i).parentElement!;
    expect(within(detailsSection).getByText(/chicken curry/i)).toBeInTheDocument();
    expect(within(detailsSection).getByText(/warm & spicy/i)).toBeInTheDocument();
  });
});
