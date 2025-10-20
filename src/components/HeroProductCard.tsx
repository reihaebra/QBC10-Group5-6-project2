import { Link } from "react-router-dom";
import { products } from "../../constants/all-products-samples";

interface HeroProductCardProps {
  image: string;
  name: string;
  category: string;
  price: string | number;
  description: string;
  rating: number;
  reviews: number;
  countInStock: number;
  updatedAt: string;
  numReviews: number
}

const HeroProductCard: React.FC<HeroProductCardProps> = ({
  _id,
  image,
  name,
  category,
  price,
  description,
  rating,
  reviews,
  countInStock,
  updatedAt,
  numReviews
}) => {

  return (
    <Link to={`/user/shop/${_id}`}> 
    <div className="font-yekan-bakh flex flex-col max-w-xl">
      <div className="w-full flex justify-center rounded-lg">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-96 rounded-lg"
        />
      </div>

      <div className="flex w-full pt-4 gap-6">
        <div className="flex-1 min-w-[45%] flex flex-col">
          <h3 className="text-base font-normal font-sans">{name}</h3>
          <p className="text-lg font-normal text-black text-left dark:text-white">
            {price}
          </p>
          <p className="text-dark text-sm leading-relaxed dark:text-white pt-6">
            {description}
          </p>
        </div>

        <div className="flex items-start gap-4 text-secondary-light dark:text-gray-400 text-sm">
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-2">
              <img
                src="../../public/icons/star-light.svg"
                alt="star"
                className="block dark:hidden"
              />
              <img
                src="../../public/icons/star-dark.svg"
                alt="star"
                className="hidden dark:block"
              />
              <span>
                امتیاز:
                <span className="text-black dark:text-white"> {rating}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="../../public/icons/frame-light.svg"
                alt="count"
                className="block dark:hidden"
              />
              <img
                src="../../public/icons/frame-dark.svg"
                alt="count"
                className="hidden dark:block"
              />
              <span>
                تعداد:
                <span className="text-black dark:text-white"> {numReviews}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="../../public/icons/mojodi-light.svg"
                alt="stock"
                className="block dark:hidden"
              />
              <img
                src="../../public/icons/mojodi-dark.svg"
                alt="stock"
                className="hidden dark:block"
              />
              <span>
                موجودی:
                <span className="text-black dark:text-white">{countInStock}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-2">
              <img
                src="../../public/icons/brand.svg"
                alt="brand"
                className="block dark:hidden"
              />
              <img
                src="../../public/icons/brand-dark.svg"
                alt="brand"
                className="hidden dark:block"
              />
              <span>
                برند:
                <span className="text-black dark:text-white"> {category.name}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="../../public/icons/time-light.svg"
                alt="time"
                className="block dark:hidden"
              />
              <img
                src="../../public/icons/time-dark.svg"
                alt="time"
                className="hidden dark:block"
              />
              <span>
                بروزرسانی:
                <span className="text-black dark:text-white">{new Date(updatedAt).toLocaleDateString("fa-IR")}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="../../public/icons/star-light.svg"
                alt="reviews"
                className="block dark:hidden"
              />
              <img
                src="../../public/icons/star-dark.svg"
                alt="reviews"
                className="hidden dark:block"
              />
              <span>
                نظرات:
                <span className="text-black dark:text-white"> {numReviews}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default HeroProductCard;
