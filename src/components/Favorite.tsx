import ProductCard from "./ui/ProductCard";

interface FavoriteItem {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

const Favorite = () => {
  const products: FavoriteItem[] = [
    {
      id: 1,
      title: "Apple iPad Pro 12.9-inch",
      price: "۱۰,۰۰۰ تومان",
      imageUrl: "",
    },
    {
      id: 2,
      title: "Samsung Galaxy Tab S8",
      price: "۸,۵۰۰ تومان",
      imageUrl: "",
    },
    {
      id: 3,
      title: "Samsung Galaxy Tab S8",
      price: "۸,۵۰۰ تومان",
      imageUrl: "",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              size="big"
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
