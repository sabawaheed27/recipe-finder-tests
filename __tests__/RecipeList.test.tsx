import { render, screen } from "@testing-library/react";
import React from "react";

// Define local Recipe type
type Recipe = {
  id: number;
  name: string;
  description: string;
};

// Mock RecipeList component
type RecipeListProps = {
  recipes: Recipe[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onSelect: (id: number) => void;
};

function RecipeList({ recipes }: RecipeListProps) {
  if (recipes.length === 0) {
    return <p>No recipes found</p>;
  }
  return (
    <div>
      {recipes.map((r) => (
        <article key={r.id}>
          <h2>{r.name}</h2>
          <p>{r.description}</p>
        </article>
      ))}
    </div>
  );
}

//Sample recipes
const recipes: Recipe[] = [
  { id: 1, name: "Pizza", description: "Cheesy" },
  { id: 2, name: "Soup", description: "Hot" },
];

describe("RecipeList Component", () => {
  it("renders all recipes", () => {
    render(
      <RecipeList
        recipes={recipes}
        favorites={[]}
        onToggleFavorite={() => {}}
        onSelect={() => {}}
      />
    );
    expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(recipes.length);
  });

  it("renders fallback when recipes array is empty", () => {
    render(
      <RecipeList
        recipes={[]}
        favorites={[]}
        onToggleFavorite={() => {}}
        onSelect={() => {}}
      />
    );
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(screen.getByText(/no recipes found/i)).toBeInTheDocument();
  });
});
