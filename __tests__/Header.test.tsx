


import { render, screen } from "@testing-library/react";
import Header from "../app/Components/Header";

describe("Header Component", () => {
  it("renders the main heading", () => {
    render(<Header title="Recipe Finder" favoritesCount={3} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Recipe Finder");
  });

  it("shows the favorites count", () => {
    render(<Header title="Recipes" favoritesCount={5} />);
    expect(screen.getByText(/Favorites:/)).toHaveTextContent("Favorites: 5");
  });

  it("renders optional subtitle", () => {
    render(<Header title="Recipes" subtitle="Find your meal" favoritesCount={0} />);
    expect(screen.getByText("Find your meal")).toBeInTheDocument();
  });

  it("does not render subtitle if not provided", () => {
    render(<Header title="Recipes" favoritesCount={2} />);
    expect(screen.queryByTestId("subtitle")).not.toBeInTheDocument();
  });

  it("shows zero favorites correctly", () => {
    render(<Header title="Recipes" favoritesCount={0} />);
    expect(screen.getByText(/Favorites:/)).toHaveTextContent("Favorites: 0");
  });

  it("applies correct role to the header container", () => {
    render(<Header title="Recipe Finder" favoritesCount={1} />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("matches snapshot for default props", () => {
    const { asFragment } = render(<Header title="Snapshot Test" favoritesCount={10} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
