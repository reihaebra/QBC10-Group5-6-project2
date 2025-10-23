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
import { useParams } from "react-router-dom";
import { addCommentApi, getCommentsApi } from "../api/requests/comment";
import toast from "react-hot-toast";

export interface Reviews {
  name?: string;
  rating: number;
  comment: string;
  user?: number | string;
  _id?: number | string;
  createdAt?: number | string;
  updatedAt?: string | number;
}

export interface Product {
  _id: number | string;
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
  const [activeSection, setActiveSection] = useState("related");
  const [product, setProduct] = useState<Product | null>(null);
  const [productCategory, setProductCategory] =
    useState<productCategory | null>(null);
  const { productId } = useParams<{ productId: string }>();
  console.log(productId);

  const [comments, setComments] = useState<Reviews[]>([]);

  const handleCommentSubmit =async (newComment: Reviews) => {
    let checkBollean = true
    const check = await getCommentsApi(productId ?? " ");
    console.log("from local  "+localStorage.getItem("id"));
    check.reviews.map((review:Reviews) =>{
      if(review.user === localStorage.getItem("id")){
        toast.error("قبلا به این محصول لطف داشتی ")
        checkBollean =false
      }
    })
    if(checkBollean){

      const response = await addCommentApi(productId ?? " ", newComment);
      console.log(response);
    }

    setComments((prev) => [...prev, newComment]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getSingleProducts(productId ?? "");
        if (response) {
          const data = await getProductCategory(response.category);
          if (response.data === "Product already reviewed") {
            toast.error("قبلا برای این محصول نظر ثبت کردی");
          }
          setProductCategory(data);
        }
        setProduct(response);
        console.log("single product :" + product?._id);
      } catch (error: any) {
       
        
        if (error.response) {
          if (
            error.response.status === 400 &&
            error.response.data === "Product already reviewed"
          ) {
            toast.error("قبلاً برای این محصول نظر ثبت کرده‌ای");
          } else {
            toast.error("خطایی در دریافت اطلاعات رخ داد");
            console.error("Server error:", error.response);
          }
        } else {
          toast.error("خطا در اتصال به سرور");
          console.error("Network or unknown error:", error);
        }
      }
    };
    const getComments = async () => {
      try {
        const response = await getCommentsApi(productId ?? "");
        setComments(response.reviews);
      } catch (error) {
        console.error("Erorr:", error);
      }
    };
    getComments();
    fetchProduct();
  }, []);

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
            {activeSection === "related" && productId && (
              <RelatedProducts productID={productId} />
            )}

            {activeSection === "add" && (
              <CommentForm onSubmit={handleCommentSubmit} />
            )}

            {activeSection === "view" && (
              <div className="flex flex-col gap-4">
                {comments.length === 0 ? (
                  <p>هیچ نظری ثبت نشده است.</p>
                ) : (
                  comments.map((comment) => (
                    <CommentItem
                      key={comment._id}
                      name={comment.name ?? "کاربر"}
                      date={new Date(comment?.createdAt!).toLocaleDateString(
                        "fa-IR"
                      )}
                      text={comment.comment}
                      rating={Number(comment.rating)}
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
