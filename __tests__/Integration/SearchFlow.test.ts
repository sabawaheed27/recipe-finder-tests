
// import { render, screen, fireEvent } from "@testing-library/react";
// import Home from "@/app/page";

// describe("Search Flow", () => {
//   it("filters recipes when a search term is entered", () => {
//     render(<Home />);

//     const searchInput = screen.getByRole("textbox", { name: /search/i });
//     fireEvent.change(searchInput, { target: { value: "chicken" } });

//     const recipeCards = screen.getAllByRole("heading", { level: 2 });
//     expect(recipeCards.length).toBeGreaterThan(0);
//     recipeCards.forEach(card => {
//       expect(card.textContent?.toLowerCase()).toContain("chicken");
//     });
//   });
// });

