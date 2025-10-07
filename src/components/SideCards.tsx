import ProductCard from "./ui/ProductCard";

const SideCards = () => {
  const products = [
    { title: "Apple iPad Pro 12.9-inch", price: "۸,۰۰۰ تومان" },
    { title: "Apple iPad Pro 11-inch", price: "۶,۰۰۰ تومان" },
    { title: "Apple iPad Air", price: "۵,۵۰۰ تومان" },
    { title: "Apple iPad Mini", price: "۴,۵۰۰ تومان" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((p, i) => (
        <ProductCard
          key={i}
          {...p}
          size="small"
          imageUrl="./src/assets/images/ipad.png"
        />
      ))}
    </div>
  );
};

export default SideCards;
