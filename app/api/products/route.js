// app/api/products/route.js
export async function GET() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99.99,
      image: "/images/headphones.jpg",
      inStock: true,
      sale: true,
      description: "Comfortable wireless headphones with rich sound and long battery life.",
    },
    {
      id: 2,
      title: "Smartwatch Pro",
      price: 149.99,
      image: "/images/watch.jpg",
      inStock: false,
      sale: false,
      description: "Stylish smartwatch with fitness tracking, heart-rate monitor, and notifications.",
    },
  ];

  return Response.json(products);
}
