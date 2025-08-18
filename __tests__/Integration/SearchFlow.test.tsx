import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock recipe type
type Recipe = { 
    id: number; 
    name: string; 
    description: string };

// Mock Home component
function Home() {
  const allRecipes: Recipe[] = [
    { id: 1, name: "Pizza", description: "Cheesy" },
    { id: 2, name: "Soup", description: "Hot" },
    { id: 3, name: "Chicken Curry", description: "Spicy" },
  ];

  const [search, setSearch] = useState("");
  const filteredRecipes = allRecipes.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search">Search Recipes</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        {filteredRecipes.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          filteredRecipes.map(r => (
            <article key={r.id}>
              <h2>{r.name}</h2>
              <p>{r.description}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

// Integration test
describe("Recipe Search Flow", () => {
  it("filters recipes when a search term is entered", () => {
    render(<Home />);

    const input = screen.getByRole("textbox", { name: /search recipes/i });
    fireEvent.change(input, { target: { value: "chicken" } });

    const recipeCards = screen.getAllByRole("heading", { level: 2 });
    expect(recipeCards.length).toBe(1);
    expect(recipeCards[0].textContent?.toLowerCase()).toContain("chicken");
  });

  it("shows fallback when no recipe matches search", () => {
    render(<Home />);

    const input = screen.getByRole("textbox", { name: /search recipes/i });
    fireEvent.change(input, { target: { value: "xyz" } });

    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(screen.getByText(/no recipes found/i)).toBeInTheDocument();
  });
});
