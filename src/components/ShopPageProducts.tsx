import ShopProductCard from "./ui/ShopProductCard";
interface Product {
  title: string;
  brand: string;
  price: string;
  description: string;
  imageUrl: string;
}

const data: Product[] = [
  {
    title: "iPhone 14 Pro",
    brand: "Apple",
    price: "۱۰,۰۰۰ تومان",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر است نمایشگر Retina XDR ...",
    imageUrl: "./src/assets/images/iphone-14-pro.png",
  },
  {
    title: "iPhone 14 Pro",
    brand: "Apple",
    price: "۱۰,۰۰۰ تومان",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر است نمایشگر Retina XDR ...",
    imageUrl: "./src/assets/images/iphone-14-pro.png",
  },
  {
    title: "iPhone 14 Pro",
    brand: "Apple",
    price: "۱۰,۰۰۰ تومان",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر است نمایشگر Retina XDR ...",
    imageUrl: "./src/assets/images/iphone-14-pro.png",
  },
  {
    title: "iPhone 14 Pro",
    brand: "Apple",
    price: "۱۰,۰۰۰ تومان",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر است نمایشگر Retina XDR ...",
    imageUrl: "./src/assets/images/iphone-14-pro.png",
  },
   {
    title: "iPhone 14 Pro",
    brand: "Apple",
    price: "۱۰,۰۰۰ تومان",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر است نمایشگر Retina XDR ...",
    imageUrl: "./src/assets/images/iphone-14-pro.png",
  },
];

const ShopPage_Products = () => {
  return (
    <main className="flex flex-row flex-wrap gap-6 max-w-[1200px] h-fit">
      {data.map((item) => (
        <ShopProductCard
          key={item.title}
          title={item.title}
          brand={item.brand}
          price={item.price}
          description={item.description}
          imageUrl={item.imageUrl}
          onAddToCart={() => console.log(`${item.title} added to cart!`)}
        />
      ))}
    </main>
  );
};

export default ShopPage_Products;
