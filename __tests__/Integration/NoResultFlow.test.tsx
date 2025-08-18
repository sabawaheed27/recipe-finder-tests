import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock Home component
function Home() {
  const allRecipes = [
    { id: 1, name: "Chicken Curry", description: "Warm & Spicy" },
    { id: 2, name: "Pizza", description: "Cheesy" },
  ];

  const [search, setSearch] = useState("");
  const filteredRecipes = allRecipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search">Search Recipes</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredRecipes.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          filteredRecipes.map((r) => (
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

// Test using the mock Home
describe("No Results Flow", () => {
  it("shows a message when no recipes match the search", () => {
    render(<Home />);

    // Find the search input
    const searchInput = screen.getByRole("textbox", { name: /search recipes/i });

    // Change the input value
    fireEvent.change(searchInput, { target: { value: "zzzzzz" } });

    // Assert no recipe headings are visible
    const recipeHeadings = screen.queryAllByRole("heading", { level: 2 });
    expect(recipeHeadings.length).toBe(0);

    // Assert the "No recipes found" message is shown
    expect(screen.getByText(/no recipes found/i)).toBeInTheDocument();
  });
});
