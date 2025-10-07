import ProductCard from "./ui/ProductCard";

const SpecialProducts = () => {
  const products = [
    { title: "Apple iPad Pro 12.9-inch", price: "۸,۰۰۰ تومان" },
    { title: "Apple iPad Pro 11-inch", price: "۶,۰۰۰ تومان" },
    { title: "Apple iPad Air", price: "۵,۵۰۰ تومان" },
    { title: "Apple iPad Mini", price: "۴,۵۰۰ تومان" },
    { title: "Apple Watch Ultra", price: "۹,۰۰۰ تومان" },
    { title: "Apple Watch SE", price: "۵,۰۰۰ تومان" },
    { title: "AirPods Pro 2", price: "۴,۰۰۰ تومان" },
    { title: "MacBook Pro 14-inch", price: "۲۰,۰۰۰ تومان" },
  ];

  return (
    <div className="mt-10">
      <h2 className="font-yekan-bakh text-2xl font-semibold text-white mb-6">
        محصولات ویژه
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            {...p}
            size="small"
            imageUrl="./src/assets/images/ipad.png"
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
