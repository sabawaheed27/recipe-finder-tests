import { render, screen, fireEvent } from "@testing-library/react";

// Mock Recipe type
type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
};

// Mock RecipeCard component
type RecipeCardProps = {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onSelect: (id: number) => void;
};

function RecipeCard({ recipe, isFavorite, onToggleFavorite, onSelect }: RecipeCardProps) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <button onClick={() => onToggleFavorite(recipe.id)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button onClick={() => onSelect(recipe.id)}>Select</button>
    </div>
  );
}

//Mock recipe for testing
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

  it("shows 'Remove from Favorites' when isFavorite is true", () => {
    render(<RecipeCard recipe={mockRecipe} isFavorite={true} onToggleFavorite={() => {}} onSelect={() => {}} />);
    expect(screen.getByRole("button", { name: /remove from favorites/i })).toBeInTheDocument();
  });
});
