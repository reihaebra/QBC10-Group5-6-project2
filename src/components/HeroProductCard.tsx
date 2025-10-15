interface HeroProductCardProps {
  imageUrl: string;
  title: string;
  brand: string;
  price: string | number;
  description: string;
  rating: number;
  reviews: number;
  stock: number;
  updatedAt: string;
}

const HeroProductCard: React.FC<HeroProductCardProps> = ({
  imageUrl,
  title,
  brand,
  price,
  description,
  rating,
  reviews,
  stock,
  updatedAt,
}) => {
  return (
    <div className="font-yekan-bakh flex flex-col max-w-[500px]">
      <div className="w-full flex justify-center rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-96 rounded-lg"
        />
      </div>

      <div className="flex w-full pt-4 gap-6">
        <div className="flex-1 min-w-[45%] flex flex-col gap-2">
          <h3 className="text-base font-normal font-sans">{title}</h3>
          <p className="text-lg font-normal text-black text-left dark:text-white">
            {price}
          </p>
          <p className="text-dark text-sm leading-relaxed dark:text-white">
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
                <span className="text-black dark:text-white"> {reviews}</span>
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
                <span className="text-black dark:text-white">{stock}</span>
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
                <span className="text-black dark:text-white"> {brand}</span>
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
                <span className="text-black dark:text-white"> {updatedAt}</span>
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
                <span className="text-black dark:text-white"> {reviews}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductCard;
