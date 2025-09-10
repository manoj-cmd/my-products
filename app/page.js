import ProductCard from "./components/ProductCard";
//import ThemeToggle from "./components/ThemeToggle";
export default async function Page() {
   const res = await fetch(`${process.env.BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Error loading products: {res.status}</div>;
  }

  const products = await res.json();

  return (
    <main className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
