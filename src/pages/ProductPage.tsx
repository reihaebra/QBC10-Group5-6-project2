import { useEffect, useState } from "react";
import ProductContainer from "../components/ProductContainer";
import UserDropdown from "../components/ui/UserDropdown";
import Sidebar from "../components/ui/Sidebar";
import SidebarLinks from "../components/SidebarLinks";
import RelatedProducts from "../components/RelatedProducts";
import CommentForm from "../components/CommentForm";
import CommentItem from "../components/CommentItem";
import { getSingleProducts } from "../api/requests/singleProduct";
import { getProductCategory } from "../api/requests/productCategory";

interface Reviews {
  name: string;
  rating: number | string;
  comment: string;
  user: number | string;
  _id: number | string;
  createdAt: number | string;
  updatedAt: string | number;
}

export interface Product {
  id: number | string;
  name: string;
  image: string;
  quantity: number | string;
  description: string;
  rating: number | string;
  price: number | string;
  countInStock: number | string;
  reviews: Reviews[];
  category: string;
  createdAt: number | string;
  updatedAt: string | number;
  numReviews: string | number;
  __v: number;
}

function ProductPage() {
  const [activeSection, setActiveSection] = useState("related");
  const [product, setProduct] = useState<Product | null>(null);
  const [productCategory, setProductCategory] = useState(null);
  const [comments, setComments] = useState([
    {
      name: "علی موسوی",
      date: "1403/05/31",
      text: "متن پیام اینجا وارد میشود که میتواند یه متن بلند باشد برای مثال لورم ایپسوم یک متن ساختگی هست برای کارهای گرافیکی",
      rating: 4,
    },
  ]);

  const handleCommentSubmit = (newComment: {
    name: string;
    date: string;
    text: string;
    rating: number;
  }) => {
    setComments((prev) => [...prev, newComment]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getSingleProducts("68f4998a843e1f637fbb33b7");
        if (response) {
          const data = await getProductCategory(response.category);
          setProductCategory(data);
        }
        console.log(response);
        setProduct(response);
      } catch (error) {
        console.error("Erorr:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <div className="flex flex-col pr-32 py-20 bg-background-base-light dark:bg-[var(--color-background-primary-dark)] min-h-screen h-full">
        <ProductContainer product={product} productCategory={productCategory} />
        <div className="flex pt-16 gap-28 pr-20">
          <SidebarLinks
            activeSection={activeSection}
            onSelect={setActiveSection}
          />

          <div className="flex flex-1 flex-col">
            {activeSection === "related" && <RelatedProducts />}

            {activeSection === "add" && (
              <CommentForm onSubmit={handleCommentSubmit} />
            )}

            {activeSection === "view" && (
              <div className="flex flex-col gap-4">
                {comments.length === 0 ? (
                  <p>هیچ نظری ثبت نشده است.</p>
                ) : (
                  comments.map((c, index) => (
                    <CommentItem
                      key={index}
                      name={c.name}
                      date={c.date}
                      text={c.text}
                      rating={c.rating}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
