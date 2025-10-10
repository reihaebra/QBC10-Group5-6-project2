import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  const products = [
    { id: 1, title: "Apple iPad Pro 12.9-inch", price: "۱۰,۰۰۰,۰۰۰ تومان", imageUrl: "" },
    { id: 2, title: "Apple iPad Pro 12.9-inch", price: "۱۰,۰۰۰,۰۰۰ تومان", imageUrl: "" },
    { id: 3, title: "Apple iPad Pro 12.9-inch", price: "۱۰,۰۰۰,۰۰۰ تومان", imageUrl: "" },
    { id: 4, title: "Apple iPad Pro 12.9-inch", price: "۱۰,۰۰۰,۰۰۰ تومان", imageUrl: "" },
    { id: 5, title: "Apple iPad Pro 12.9-inch", price: "۱۰,۰۰۰,۰۰۰ تومان", imageUrl: "" },
    { id: 6, title: "Apple iPad Pro 12.9-inch", price: "۱۰,۰۰۰,۰۰۰ تومان", imageUrl: "" },
  ];

  return (
    <div
      dir="rtl"
      className="font-yekan-bakh flex flex-col lg:flex-row items-start justify-between w-full min-h-screen 
                 px-12 py-10 bg-[#f5f5f5] dark:bg-[#111] transition-colors duration-300 overflow-x-hidden"
    >
      
      <div
        className="w-full lg:w-[78%] grid 
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-x-8 gap-y-12 mt-8 lg:mt-0 justify-items-center"
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            size="small"
            title={p.title}
            price={p.price}
            imageUrl={p.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;