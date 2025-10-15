import ProductCard from "./ui/ProductCard";
import ButtonSecondary from "./ui/ButtonSecondary";

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
    { title: "MacBook Air M3", price: "۱۸,۰۰۰ تومان" },
  ];

  const visibleProducts = products.slice(0, 6);

  return (
    <div className="flex flex-col gap-6 pr-40 pl-16 pb-20">
      <div className="flex justify-between items-center py-3">
        <h2 className="font-yekan-bakh text-xl font-semibold">محصولات ویژه</h2>
        <div className="font-yekan-bakh">
          <ButtonSecondary
            text="فروشگاه"
            handleClick={() => console.log("رفتن به فروشگاه")}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {visibleProducts.map((p, i) => (
          <ProductCard
            key={i}
            {...p}
            size="big"
            imageUrl="./../../public/images/ipad.png"
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
