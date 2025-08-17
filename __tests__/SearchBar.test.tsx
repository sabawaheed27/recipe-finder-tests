import { render, screen, fireEvent,  } from "@testing-library/react";
import SearchBar from "../app/Components/SearchBar";
import "@testing-library/jest-dom";
import React, { createRef } from "react";

describe("SearchBar Component", () => {
  it("renders an input with placeholder", () => {
    render(<SearchBar value="" onChange={() => {}} onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/search recipes/i)).toBeInTheDocument();
  });

  it("renders with the given value", () => {
  render(<SearchBar value="Tacos" onChange={() => {}} onSearch={() => {}} />);
  expect(screen.getByRole("textbox")).toHaveValue("Tacos");
});

it("renders exactly one input and one button", () => {
  render(<SearchBar value="" onChange={() => {}} onSearch={() => {}} />);
  expect(screen.getAllByRole("textbox")).toHaveLength(1);
  expect(screen.getAllByRole("button")).toHaveLength(1);
});

it("button is clickable even when value is empty", () => {
  const mockSearch = jest.fn();
  render(<SearchBar value="" onChange={() => {}} onSearch={mockSearch} />);
  fireEvent.click(screen.getByRole("button", { name: /search/i }));
  expect(mockSearch).toHaveBeenCalled();
});


  it("calls onSearch when pressing Enter in the input", () => {
    const mockSearch = jest.fn();
    render(<SearchBar value="Salad" onChange={() => {}} onSearch={mockSearch} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter", code: "Enter" });
    expect(mockSearch).toHaveBeenCalledWith("Salad");
  });

  it("does not call onSearch when pressing other keys", () => {
    const mockSearch = jest.fn();
    render(<SearchBar value="Soup" onChange={() => {}} onSearch={mockSearch} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "a", code: "KeyA" });
    expect(mockSearch).not.toHaveBeenCalled();
  });

  it("supports ref forwarding", () => {
    const ref = createRef<HTMLInputElement>();
    render(<SearchBar ref={ref} value="" onChange={() => {}} onSearch={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("renders button with correct label", () => {
    render(<SearchBar value="" onChange={() => {}} onSearch={() => {}} />);
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("renders with correct aria-label for accessibility", () => {
    render(<SearchBar value="" onChange={() => {}} onSearch={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-label", "Search recipes");
  });
});
