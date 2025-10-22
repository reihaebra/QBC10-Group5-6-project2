import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserProfile } from "../api/requests/profile";
import { getSingleProducts } from "../api/requests/singleProduct";
import { getProductCategory } from "../api/requests/productCategory";
import { getComments, addComment } from "../api/requests/comments";

import ProductContainer from "../components/ProductContainer";
import UserDropdown from "../components/ui/UserDropdown";
import Sidebar from "../components/ui/Sidebar";
import SidebarLinks from "../components/SidebarLinks";
import RelatedProducts from "../components/RelatedProducts";
import CommentForm from "../components/CommentForm";
import CommentItem from "../components/CommentItem";

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

interface ProductCategory {
  _id: string | number;
  name: string;
  __v: string;
}

function ProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const [activeSection, setActiveSection] = useState("related");
  const [product, setProduct] = useState<Product | null>(null);
  const [productCategory, setProductCategory] = useState<ProductCategory | null>(null);
  const [comments, setComments] = useState<
    { name: string; date: string; text: string; rating: number }[]
  >([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) return;
        const productData = await getSingleProducts(productId);
        setProduct(productData);

        const categoryData = await getProductCategory(productData.category);
        setProductCategory(categoryData);
      } catch (error) {
        console.error("خطا در دریافت محصول:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (!productId) return;

    getComments(productId)
      .then((res) => {
        setComments(
          res.data.map((c: any) => ({
            name: c.name || c.user?.username || "کاربر",
            date: new Date(c.createdAt).toLocaleDateString("fa-IR"),
            text: c.comment,
            rating: c.rating,
          }))
        );
      })
      .catch((err) => console.error("خطا در دریافت نظرات:", err));
  }, [productId]);

  const handleCommentSubmit = async (newComment: { text: string; rating: number }) => {
    if (!productId) return;

    try {
      const user = await getUserProfile(); 
      console.log(user)
      const res = await addComment(productId, {
        rating: newComment.rating,
        comment: newComment.text,
      });
      console.log("response :" , res)
      
    
      setComments((prev) => [
        ...prev,
        {
          name: user?.username || "کاربر",
          date: new Date().toLocaleDateString("fa-IR"),
          text: newComment.text,
          rating: newComment.rating,
        },
      ]);

      setActiveSection("view");
    } catch (err: any) {
      const status = err?.response?.status;
      if (status === 401) {
        navigate("/login");
      } else {
        navigate("/login");
        
      }
    }
  };

  return (
    <>
      <Sidebar>
        <UserDropdown />
      </Sidebar>

      <div className="flex flex-col pr-32 py-20 bg-background-base-light dark:bg-[var(--color-background-primary-dark)] min-h-screen h-full">
        {product && (
          <ProductContainer product={product} productCategory={productCategory} />
        )}

        <div className="flex pt-16 gap-28 pr-20">
          <SidebarLinks activeSection={activeSection} onSelect={setActiveSection} />

          <div className="flex flex-1 flex-col">
            {activeSection === "related" && productId && (
              <RelatedProducts productID={productId} />
            )}

            {activeSection === "add" && <CommentForm onSubmit={handleCommentSubmit} />}

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
