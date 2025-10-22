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
import { useNavigate, useParams } from "react-router-dom";
import { getUserProfile } from "../api/requests/profile";
import { addComment, getComments } from "../api/requests/comments";

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

interface productCategory {
  _id: string | number;
  name: string;
  __v: string;
}

function ProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string  }>();

  const [activeSection, setActiveSection] = useState("related");
  const [product, setProduct] = useState<Product | null>(null);
  const [productCategory, setProductCategory] = useState<productCategory | null>(null);
  console.log(productId);

  const [comments, setComments] = useState<any[]>([]);

  
  // const handleCommentSubmit = (newComment: {
  //   name: string;
  //   date: string;
  //   text: string;
  //   rating: number;
  // }) => {
  //   setComments((prev) => [...prev, newComment]);
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getSingleProducts(productId ?? "");
        if (response) {
          const data = await getProductCategory(response.category);
          setProductCategory(data);
        }
        setProduct(response);
      } catch (error) {
        console.error("Erorr:", error);
      }
    };
    if (productId) fetchProduct();
  }, [productId]);
  useEffect(() => {
    if (!productId) return;

    const fetchComments = async () => {
      try {
        const data = await getCommentsDataFromServer(productId);
        setComments(data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          console.log("کاربر لاگین نکرده");
        } else {
          console.error(err);
        }
      }
    };
  
    fetchComments();
  }, [productId]);
  const handleCommentSubmit = async (newComment: { text: string; rating: number }) => {
    if (!productId) return;

    try {
      await addComment(productId, { rating, comment });
const updatedComments = await getCommentsDataFromServer(productId);
setComments(updatedComments);
    
      
      setActiveSection("view");
    } 
    catch (err: any) {
      const status = err?.response?.status;
      if (status === 401) {
        console.log("کاربر لاگین نکرده");
      
      } else {
        console.error(err);
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
          <ProductContainer
            product={product}
            productCategory={productCategory}
          />
        )}
        <div className="flex pt-16 gap-28 pr-20">
          <SidebarLinks
            activeSection={activeSection}
            onSelect={setActiveSection}
          />

          <div className="flex flex-1 flex-col">
            {activeSection === "related" && productId && (<RelatedProducts productID={productId}  />)}

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
async function getCommentsDataFromServer(productId: string) {
  try {
    const res = await getComments(productId);
    return res.data.map((c: any) => ({
      name: c.name || c.user?.username || "کاربر",
      date: new Date(c.createdAt).toLocaleDateString("fa-IR"),
      text: c.comment,
      rating: c.rating,
    }));
  } catch (err) {
    console.error("❌ خطا در دریافت کامنت‌ها:", err);
    return [];
  }
}

export default ProductPage;



