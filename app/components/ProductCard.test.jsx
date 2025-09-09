import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

// Sample product data
const productMock = {
  title: "Test Product",
  price: 99.99,
  description: "This is a test product",
  image: "/test-image.png",
  sale: true,
  inStock: true,
};

describe("ProductCard Component", () => {
  test("renders product title, price and description", () => {
    render(<ProductCard product={productMock} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
  });

  test("renders Sale label if product is on sale", () => {
    render(<ProductCard product={productMock} />);
    expect(screen.getByText("Sale")).toBeInTheDocument();
  });

  test("renders Add to Cart button when in stock", () => {
    render(<ProductCard product={productMock} />);
    const button = screen.getByRole("button", { name: /Add to Cart/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test("renders Out of Stock button when not in stock", () => {
    render(<ProductCard product={{ ...productMock, inStock: false }} />);
    const button = screen.getByRole("button", { name: /Unavailable/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });

  test("renders product image with correct alt text", () => {
    render(<ProductCard product={productMock} />);
    const image = screen.getByAltText("Test Product");
    expect(image).toBeInTheDocument();
  });
});
