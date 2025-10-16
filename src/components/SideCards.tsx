import ProductCard from "../components/ui/ProductCard";

const SideCards = () => {
  const products = [
    {
      title: "Apple iPad Pro 12.9-inch",
      price: "۴۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./../../public/images/ipad-pro.png",
    },
    {
      title: "Apple iPad Air 10.9-inch",
      price: "۳۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./../../public/images/ipad-air.png",
    },
    {
      title: "Apple iPad Mini",
      price: "۲۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./../../public/images/ipad-mini.png",
    },
    {
      title: "Apple Watch Ultra 2",
      price: "۵۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./../../public/images/apple-watch-ultra.png",
    },
  ];

  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 h-fit">
      {products.map((product, i) => (
        <ProductCard key={i} {...product} size="small" />
      ))}
    </div>
  );
};

export default SideCards;
