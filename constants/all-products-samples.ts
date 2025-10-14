interface Product {
  id?: number;
  description: string;
  title: string;
  price: string;
  imageUrl: string;
}

interface FavoriteItem {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ....",
    title: "Apple iPhone 14 Pro",
    price: "۱۰,۰۰۰ تومان",
    imageUrl: "./../../public/images/iphone-14-full.png",
  },
  {
    id: 2,
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ....",
    title: "Apple iPhone 14 Pro",
    price: "۱۰,۰۰۰ تومان",
    imageUrl: "./../../public/images/iphone-14-full.png",
  },
  {
    id: 3,
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ....",
    title: "Apple iPhone 14 Pro",
    price: "۱۰,۰۰۰ تومان",
    imageUrl: "./../../public/images/iphone-14-full.png",
  },
  {
    id: 4,
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ....",
    title: "Apple iPhone 14 Pro",
    price: "۱۰,۰۰۰ تومان",
    imageUrl: "./../../public/images/iphone-14-full.png",
  },
  {
    id: 5,
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ....",
    title: "Apple iPhone 14 Pro",
    price: "۱۰,۰۰۰ تومان",
    imageUrl: "./../../public/images/iphone-14-full.png",
  },
  {
    id: 6,
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ....",
    title: "Apple iPhone 14 Pro",
    price: "۱۰,۰۰۰ تومان",
    imageUrl: "./../../public/images/iphone-14-full.png",
  },
];

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

export default allProducts;
export { products };
