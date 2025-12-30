import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Delphine Cane Velvet Accent Chair",
    image: "/images/products/p-1.webp",
    price: 249.7,
    oldPrice: 289.7,
    discount: "-14%",
    rating: 5,
    delivery: "2 Day Delivery",
  },
  {
    id: 2,
    name: "CH24 Wishbone Chair",
    image: "/images/products/p-3.webp",
    price: 331,
    oldPrice: 366,
    discount: "-11%",
    rating: 5,
    delivery: "2 Day Delivery",
  },
  {
    id: 3,
    name: "Clara French Press",
    image: "/images/products/p-2.jpg",
    price: 159,
    oldPrice: 189,
    tag: "Trending",
    rating: 4,
    delivery: "3 Day Delivery",
  },
  {
    id: 4,
    name: "Hay – About A Chair AAC 22",
    image: "/images/products/p-4.jpg",
    price: 229,
    oldPrice: 249,
    discount: "-9%",
    rating: 4,
    delivery: "3 Day Delivery",
  },
    {
    id: 5,
    name: "Delphine Cane Velvet Accent Chair",
    image: "/images/products/p-1.webp",
    price: 249.7,
    oldPrice: 289.7,
    discount: "-14%",
    rating: 5,
    delivery: "2 Day Delivery",
  },
  {
    id: 6,
    name: "CH24 Wishbone Chair",
    image: "/images/products/p-3.webp",
    price: 331,
    oldPrice: 366,
    discount: "-11%",
    rating: 5,
    delivery: "2 Day Delivery",
  },
  {
    id: 7,
    name: "Clara French Press",
    image: "/images/products/p-2.jpg",
    price: 159,
    oldPrice: 189,
    tag: "Trending",
    rating: 4,
    delivery: "3 Day Delivery",
  },
  {
    id: 8,
    name: "Hay – About A Chair AAC 22",
    image: "/images/products/p-4.jpg",
    price: 229,
    oldPrice: 249,
    discount: "-9%",
    rating: 4,
    delivery: "3 Day Delivery",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Featured Products</h2>
        <p className="text-gray-500 mt-2">
          Visit our shop to see amazing creations from our designers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative bg-gray-50 rounded-t-xl p-6">
              {/* {item.discount && (
                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )} */}

              {/* {item.tag && (
                <span className="absolute top-4 left-4 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
                  {item.tag}
                </span>
              )} */}

              {/* <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                <Heart size={16} className="text-gray-400" />
              </button> */}

              <img
                src={item.image}
                alt={item.name}
                className="h-44 mx-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-medium line-clamp-2">
                {item.name}
              </h3>

              {/* Price */}
              {/* <div className="flex items-center gap-2 mt-2">
                <span className="font-semibold text-gray-900">
                  ${item.price}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ${item.oldPrice}
                </span>
              </div> */}

              {/* Rating */}
              {/* <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
                <span className="text-gray-500 ml-2">
                  {item.rating}.00 Rating
                </span>
              </div> */}

              {/* Delivery */}
              {/* <p className="text-xs text-green-600 mt-2">
                • {item.delivery}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}