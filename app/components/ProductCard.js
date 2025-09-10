'use client';
import Image from "next/image";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
     className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-lg 
                 flex flex-col items-center text-center 
                 w-full sm:w-80 lg:w-96 mx-auto"
    >
      {/* Product image + status labels */}
      <figure className="relative w-full h-60 flex justify-center items-center">
        <Image 
          src={product.image}
          alt={product.title || "Product image"}  
          fill
          className="object-contain"  
          loading="lazy"
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 1024px) 50vw, 
                 25vw"
        />

        {product.sale && (
          <span 
            className="absolute top-2 bg-lightBg text-lightText transition-colors duration-300 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium"
            role="status"
          >
            Sale
          </span>
        )}

        {!product.inStock && (
          <span 
            className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded font-medium"
            role="status"
          >
            Out of Stock
          </span>
        )}
      </figure>

      {/* Product info */}
      <figcaption className="p-4 flex flex-col items-center">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          {product.title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300 font-medium">
          ${product.price}
        </p>

        {product.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-xs">
            {product.description}
          </p>
        )}

        <button 
          type="button"
          disabled={!product.inStock}
          aria-disabled={!product.inStock}
          className={`mt-3 w-full px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 
            ${product.inStock 
              ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500" 
              : "bg-gray-400 text-gray-800 cursor-not-allowed"
            }
          `}
        >
          {product.inStock ? "View More" : "Unavailable"}
        </button>
      </figcaption>
    </motion.article>
  );
}

export default ProductCard;
